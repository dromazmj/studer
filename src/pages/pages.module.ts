import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '../common/common.module';
import { HomePage } from './home/home';
import { WelcomePage } from './welcome/welcome';
import { LoginPage } from './login/login';
import { SignupPage } from './signup/signup';
import { ProfilePage } from './profile/profile';
import { SignupconfirmPage } from './signupconfirm/signupconfirm';
import { ChangePasswordPage } from './change-password/change-password';
import { ForgotPage } from './forgot/forgot';
import { ForgotConfirmPage } from './forgot-confirm/forgot-confirm';
import { TabsPage } from './tabs/tabs';
import { EditProfilePage } from './edit-profile/edit-profile';

export const AppPages = [
    ChangePasswordPage,ForgotPage,ForgotConfirmPage,HomePage,LoginPage,ProfilePage,SignupPage,SignupconfirmPage,WelcomePage,TabsPage, EditProfilePage
];

export const MainPage = WelcomePage;

export * from './change-password/change-password';
export * from './forgot/forgot';
export * from './forgot-confirm/forgot-confirm';
export * from './home/home';
export * from './login/login';
export * from './signup/signup';
export * from './signupconfirm/signupconfirm';
export * from './welcome/welcome';
export * from './edit-profile/edit-profile';
export * from './tabs/tabs';


@NgModule({
    declarations: [
        AppPages,
        WelcomePage
    ],
    imports: [],
    exports: [
        AppPages,
        WelcomePage
    ]
})
export class PagesModule {
    constructor(@Optional() @SkipSelf() parentModule: PagesModule){
        throwIfAlreadyLoaded(parentModule, 'PagesModule');
    }
}



