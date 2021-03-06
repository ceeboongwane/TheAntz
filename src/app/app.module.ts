import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { StreetartzProvider } from '../providers/streetart-database/streetart-database';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CategoryPage } from '../pages/category/category';
import { ProfilePage } from '../pages/profile/profile';
import { UploadImagePage } from '../pages/upload-image/upload-image';
import { ViewPage } from '../pages/view/view';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { SplashScreenPage } from '../pages/splash-screen/splash-screen';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PopOverProfilePage } from '../pages/pop-over-profile/pop-over-profile';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    CategoryPage,
    ProfilePage,
    UploadImagePage,
    ViewPage,
    EditProfilePage,
    SplashScreenPage,
    PopOverProfilePage
 
  ],
  imports: [
    BrowserModule, HttpClientModule ,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    CategoryPage,
    ProfilePage,
    UploadImagePage,
    ViewPage,
    EditProfilePage,
    PopOverProfilePage
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreetartzProvider,
  ]
})
export class AppModule {}
