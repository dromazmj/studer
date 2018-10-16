import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { ModelParamOptions, IModalParams, IBrMaskModel, ICountry, BusinessService, ValidatorService, PhoneValidator } from '../../common/common.module';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ICognitoProfile } from '../../aws/aws.module';

import libphonenumber from 'google-libphonenumber';
import { ICognitoUserAttributeData } from 'amazon-cognito-identity-js';


@IonicPage()
@Component({
  selector: 'edit-page-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  brConfig: IBrMaskModel = {};
  cognitoProfile: ICognitoProfile;
  countries: Array<ICountry> = [];
  dial_code: string = '';
  country_example_number: string;
  example_number_formatted: string;
  submitAttempt: boolean = false;
  PNF = libphonenumber.PhoneNumberFormat;
  PNT = libphonenumber.PhoneNumberType;
  profileForm: FormGroup;
  phone_validation_messages: {} = {};
  util: libphonenumber.PhoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
  validation_messages:any;
  
  constructor(private businessService: BusinessService, private fb: FormBuilder, private loadingController: LoadingController,
              private viewController: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  buildForm() {
    let self = this;

    self.loadCountries();

    self.validation_messages = {
      'email': [
        { type: 'required', message: 'Email is required' },
        { type: 'email', message: 'Enter a valid email' }
      ],
      'username': [
        { type: 'required', message: 'Username is required' },
        { type: 'minlength', message: 'Username must be at least 5 characters long' },
        { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
        { type: 'pattern', message: 'Username must contain only numbers and letters' }
      ],
      'given_name': [
        { type: 'required', message: 'First name is required' },
        { type: 'pattern', message: 'First name must contain only alpha characters' },
        { type: 'minlength', message: 'First name must be at least 2 characters long' },
        { type: 'maxlength', message: 'First name cannot be more than 30 characters long' }
      ],
      "family_name": [
        { type: 'required', message: 'Last name is required' },
        { type: 'pattern', message: 'Last name must contain only alpha characters' },
        { type: 'minlength', message: 'Last name must be at least 2 characters long' },
        { type: 'maxlength', message: 'Last name cannot be more than 30 characters long' }
      ],
      'birthdate': [
        { type: 'required', message: 'Birthdate is required' }
      ],
      'country_code__c': [
        { type: 'required', message: 'Country is required' }
      ],
      'phone_number': [
        { type: 'required', message: 'Phone is required' },
        { type: 'validCountryPhone', message: 'Phone is incorrect for the country selected' }
      ]
    };

    self.cognitoProfile = self.businessService.authUser.cognitoProfile;
    self.cognitoProfile.country_code__c = self.cognitoProfile.country_code__c == undefined ? 'US' : self.cognitoProfile.country_code__c;
    self.cognitoProfile.phone_number = self.cognitoProfile.phone_number == undefined ? undefined : self.util.format(self.util.parse(self.cognitoProfile.phone_number,<string>self.cognitoProfile.country_code__c), self.PNF.NATIONAL);

    self.dial_code = '+' + self.util.getCountryCodeForRegion(<string>self.cognitoProfile.country_code__c);
    self.country_example_number = self.util.getExampleNumberForType(<string>self.cognitoProfile.country_code__c, self.PNT.MOBILE);
    self.example_number_formatted = self.util.format(self.country_example_number, self.PNF.NATIONAL);
    self.brConfig.mask = self.example_number_formatted;

    let country_code = new FormControl(self.cognitoProfile.country_code__c, Validators.compose([Validators.required]));

    self.profileForm = self.fb.group({
      given_name: [self.cognitoProfile.given_name, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(1), Validators.maxLength(30)])],
      family_name: [self.cognitoProfile.family_name, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3), Validators.maxLength(30)])],
      username: [{ value:self.cognitoProfile.preferred_username, disabled:true }, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(25)])],
      email: [self.cognitoProfile.email, Validators.compose([Validators.required, ValidatorService.ValidateEmail])],
      birthdate: [self.cognitoProfile.birthdate, Validators.compose([Validators.required])],
      country_code__c: country_code,
      phone_number: [self.cognitoProfile.phone_number, Validators.compose([PhoneValidator.validCountryPhone(country_code)])]
    });
  }

  ionViewDidLoad() { }

  cancel(data?:any, operation?:string) {
    let self = this;

    let params: IModalParams = {};
    if (operation){
      params.operation = operation;
    } else {
      params.operation = ModelParamOptions.CANCEL;
    }
    if (data){
      params.param = data;
    }

    self.viewController.dismiss(params);
  }

  loadCountries() {
    let self = this;

    let us: ICountry = {id:232,code:'US',dial_code:'+1',flag:null,name:'United States',sortOrder:0};
    let ca: ICountry = {id:70,code:'CA',dial_code:'+1',flag:null,name:'Canada',sortOrder:1};
    let mx: ICountry = {id:156,code:'MX',dial_code:'+52',flag:null,name:'Mexico',sortOrder:2};

    self.countries.push(us);
    self.countries.push(ca);
    self.countries.push(mx);
  }

  ngOnInit() {
    let self = this;

    self.buildForm();
  }

  async save() {
    let self = this;

    if (self.profileForm.valid) {
      let loader = self.loadingController.create({
        showBackdrop: false,
        spinner: 'dots'
      });

      let oprofile: ICognitoProfile = this.profileForm.value;
      oprofile.phone_number = self.util.format(self.util.parse(oprofile.phone_number, <string>oprofile.country_code__c),self.PNF.E164);
      let attributes: ICognitoUserAttributeData[] = await self.businessService.getCognitoAttributesData(oprofile, true);

  
      loader.present()
      .then(() => {

        self.businessService.updateCognitoProfile(attributes)
        .then((data) => {
          
          loader.dismiss();
          self.businessService.authUser.cognitoProfile = data;
          self.cancel({'cognitoProfile':self.businessService.authUser}, ModelParamOptions.SAVE);

        })
        .catch((err)=> {
          console.log('error returned from update.', err);
          loader.dismiss();
        });
      }, () => {
        loader.dismiss();
      });
    } 
  }

}
