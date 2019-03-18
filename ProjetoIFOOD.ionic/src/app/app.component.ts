import { DatabaseProvider } from './../providers/database/database';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null; // para evitar problemas de plugin nao instalado no cordova

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      dbProvider.createDatabase()
      .then(()=>{
        this.abrirPaginaInicial(splashScreen)
      })
      .catch(()=>{
        this.abrirPaginaInicial(splashScreen)
      })
    });
  }
  private abrirPaginaInicial(splashScreen: SplashScreen)
  {
    splashScreen.hide();
    this.rootPage=LoginPage;//agora sim chama a home page

  }
}

