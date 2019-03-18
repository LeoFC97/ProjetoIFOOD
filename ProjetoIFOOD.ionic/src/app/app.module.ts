import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SpinnerProvider } from '../providers/spinner/spinner';
import { AlertProvider } from '../providers/alert/alert';
import { HttpProvider } from '../providers/http/http';
import { CatogoriaProvider } from '../providers/catogoria/catogoria';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DatabaseProvider } from '../providers/database/database';
import { ClientesProvider } from '../providers/clientes/clientes';
import { ProdutosProvider } from '../providers/produtos/produtos';


@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpinnerProvider,
    AlertProvider,
    HttpProvider,
    CatogoriaProvider,
    SQLite,
    {provide: LOCALE_ID, useValue:'PT-BR'},
    DatabaseProvider,
    ClientesProvider,
    ProdutosProvider
  ]
})
export class AppModule {}
