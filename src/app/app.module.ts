import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrMaskerModule } from 'brmasker-ionic-3';


import { MyApp } from './app.component';
import { AppPages } from '../pages/pages.module';
import { CommonModule } from '../common/common.module';
import { ComponentsModule } from '../components/components.module';
import { IonicStorageModule } from '@ionic/storage';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    MyApp,
    AppPages
  ],
  imports: [
    BrowserModule,
    BrMaskerModule,
    CommonModule,
    ComponentsModule,
    PipesModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          statusbarPadding: true
        }
      }
    }),
    IonicStorageModule.forRoot({
      name:'__ionic-aws-cognito-app',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AppPages
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
