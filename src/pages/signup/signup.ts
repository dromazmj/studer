import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PhoneValidator, ICountry, IBrMaskModel, BusinessService } from '../../common/common.module';

import libphonenumber from 'google-libphonenumber';
import { ICognitoSignUpCredentials, ICognitoException } from '../../aws/aws.module';
import { HomePage, SignupconfirmPage, LoginPage } from '../pages.module';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  
  brConfig: IBrMaskModel = {};
  countries: Array<ICountry> = [];
  country_example_number: string;
  example_number_formatted: string;
  dial_code: string = '';
  phoneUtil: libphonenumber.PhoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
  PNF = libphonenumber.PhoneNumberFormat;
  PNT = libphonenumber.PhoneNumberType;
  signupForm: FormGroup;
  submitAttempt: boolean = false;
  validation_messages: any;
  
  constructor(private businessService: BusinessService, private fb: FormBuilder, private loadingController: LoadingController, 
              private toastController: ToastController, public navCtrl: NavController, public navParams: NavParams) {
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
      'password': [
        { type: 'required', message: 'Password is required' },
        { type: 'minlength', message: 'Password must be at least 5 characters long' },
        { type: 'pattern', message: 'Password must contain at least one uppercase, one lowercase and one number' }
      ],
      'confirmPassword': [
        { type: 'required', message: 'Confirm password is required' },
        { type: 'validateEqual', message: 'Password mismatch' }
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

    let initial_country = self.countries[0];

    let country_code = new FormControl(initial_country.code, Validators.compose([Validators.required]));

    self.dial_code = '+' + self.phoneUtil.getCountryCodeForRegion(initial_country.code);
    self.country_example_number = self.phoneUtil.getExampleNumberForType(initial_country.code, self.PNT.MOBILE);
    self.example_number_formatted = self.phoneUtil.format(self.country_example_number, self.PNF.NATIONAL);

    self.brConfig.mask = self.example_number_formatted;

    self.signupForm = self.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      given_name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2), Validators.maxLength(30)])],
      family_name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
      birthdate: ['', Validators.compose([Validators.required])],
      country_code__c: country_code,
      phone_number: ['', Validators.compose([Validators.required, PhoneValidator.validCountryPhone(country_code)])]
    });
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() { }

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

  onSelect($event){
    let self = this;

    self.signupForm.controls['phone_number'].reset();
    self.dial_code = '+' + self.phoneUtil.getCountryCodeForRegion($event);
    self.country_example_number = self.phoneUtil.getExampleNumberForType($event, self.PNT.MOBILE);
    self.example_number_formatted = self.phoneUtil.format(this.country_example_number, self.PNF.NATIONAL);
    self.brConfig.mask = self.example_number_formatted;
  }

  signUp() {
    console.log('signup form', this.signupForm);
    let self = this;

    self.submitAttempt = true;

    let toast = this.toastController.create({
      duration: 5000,
      position: 'bottom'
    });

    if (self.signupForm.valid) {
      let loader = self.loadingController.create({
        showBackdrop: false,
        spinner: 'dots'
      });

      let creds: ICognitoSignUpCredentials = this.signupForm.value;
      creds.phone_number = self.phoneUtil.format(self.phoneUtil.parse(creds.phone_number, <string>creds.country_code__c),self.PNF.E164);

      loader.present()
      .then(() => {
        loader.dismiss();

        self.businessService.signUp(creds)
          .then((data) => {
            console.log(`signupresult user data returned successful`,data);

            self.businessService.signIn(creds)
              .then((user)=> {
                
                loader.dismiss();
                self.signupForm.reset();
                self.navCtrl.push(HomePage);

              }).catch((err:ICognitoException) => {
                loader.dismiss();
                console.log('signIn error happened..', err);
                if (err.code === 'UserNotConfirmedException') {
                  self.signupForm.reset();
                  self.navCtrl.push(SignupconfirmPage);
                }
              });

          }).catch((err: ICognitoException)=> {

            toast.setMessage(err.message);
            toast.setCssClass('dangerToast');
            toast.present();
            loader.dismiss();

          });
      }, () => {
        loader.dismiss();
      });
    }
    else {

    }
  }

}
