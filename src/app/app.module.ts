import { EmpleosPage } from './../pages/empleos/empleos';
import { ListPage } from './../pages/list/list';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule} from '@angular/http';
import { MarvelServiceProvider } from '../providers/marvel-service/marvel-service';
import { EverisServiceProvider } from '../providers/everis-service/everis-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EmpleosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),    
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EmpleosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MarvelServiceProvider,
    
    EverisServiceProvider
  ]
})
export class AppModule {}
