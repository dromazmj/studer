import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ChangePasswordPage, WelcomePage, EditProfilePage } from '../pages.module';
import { BusinessService, ModelParamOptions } from '../../common/common.module';
import { AuthUser } from '../../aws/aws.module';


@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user: AuthUser;
  constructor(public businessService: BusinessService, private modalController: ModalController,
              public navCtrl: NavController) {

  }

  changePassword() {
    let self = this;
    let modal = self.modalController.create(ChangePasswordPage);

    modal.onDidDismiss((data)=>{

    });

    modal.present();
  }

  async edit() {
    let self = this;

    let modal = self.modalController.create(EditProfilePage);

    modal.onDidDismiss(async(data, role) => {
      if (data.operation == ModelParamOptions.SAVE) {
        // update the saved information //
        self.user.set(self.businessService.authUser);
      }
    });

    modal.present();
    
  }

  ngOnInit() {
    let self = this;
    self.user = AuthUser.Factory();
    self.user.set(self.businessService.authUser);
  }

  async signOut() {
    let self = this;

    self.businessService.signOut();

    self.navCtrl.setRoot(WelcomePage);
  }

}
