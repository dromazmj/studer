import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChatsPage } from '../pages/chats/chats';
import { ProfilePage } from '../pages/profile/profile';
import { JobsPage } from '../pages/jobs/jobs';
import { TabsPage } from '../pages/tabs/tabs';
import { MyJobsPage } from '../pages/myjobs/myjobs';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth-service';

/*YOU HAVE TO PUT YOUR APIKEY FROM YOUR FIREBASE COUNT*/

export const firebaseConfig = {
    apiKey: "AIzaSyAqGU8ArI3iuUEdtBR8-8WWsFvm4_AkokI",
    authDomain: "studer-aa654.firebaseapp.com",
    databaseURL: "https://studer-aa654.firebaseio.com/",
    projectId: "studer-aa654",
    storageBucket: "gs://studer-aa654.appspot.com",
    messagingSenderId: "379553254767"
};

@NgModule({
  declarations: [
    MyApp,
    ChatsPage,
    ProfilePage,
    JobsPage,
    MyJobsPage,
    LoginPage,
    SignUpPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatsPage,
    ProfilePage,
    JobsPage,
    MyJobsPage,
    LoginPage,
    SignUpPage,
    TabsPage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
