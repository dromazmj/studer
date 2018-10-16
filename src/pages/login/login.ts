import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage, ForgotPage } from '../pages.module';
import { ICognitoException, ICognitoCredentials } from '../../aws/aws.module';
import { BusinessService } from '../../common/common.module';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  validation_messages: any;
  submitAttempt: boolean = false;

  constructor(private businessService: BusinessService, private fb: FormBuilder, private loadingController: LoadingController, 
              private toastController: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    
  }

  buildForm() {
    let self = this;

    self.validation_messages = {
      'username': [
        { type: 'required', message: 'Username is required' },
        { type: 'minlength', message: 'Username must be at least 5 characters long' },
        { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
        { type: 'pattern', message: 'Username must contain only numbers and letters' }
      ],
      'password': [
        { type: 'required', message: 'Password is required' }
      ]
    };

    self.loginForm = self.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(25)])],
      password: ['', Validators.compose([Validators.required])]
    }, { updatedOn: 'blur'});

  }

  goToForgot() {
    this.navCtrl.push(ForgotPage);
  }

  ionViewDidLoad() { }

  ngOnInit() {
    let self = this;

    self.buildForm();
  }

  login() {
    let self = this;

    self.submitAttempt = true;

    let toast = self.toastController.create({
      duration: 5000,
      position: 'bottom'
    });

    if (self.loginForm.valid) {
      let loader = self.loadingController.create({
        showBackdrop: false,
        spinner: 'dots'
      });

      let creds: ICognitoCredentials = self.loginForm.value;

      loader.present()
      .then(async () => {
        await self.businessService.signIn(creds)
        .then((resp) => {
          self.loginForm.reset();
          loader.dismiss();
        })
        .then(() => {
          self.navCtrl.setRoot(HomePage);
        })
        .catch((error: ICognitoException) => {
          console.log('error', error);
          loader.dismiss();
          toast.setMessage(error.message);
          toast.present();
        });
      }, () => {
        loader.dismiss();
      });
    }
    else {

    }
  }

}
