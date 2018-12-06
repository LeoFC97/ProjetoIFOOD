import { CategoriaPage } from './../categoria/categoria';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the TabCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-categorias',
  templateUrl: 'tab-categorias.html',
})
export class TabCategoriasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabCategoriasPage');
    this.app.getRootNav().setRoot(CategoriaPage);
  }

  

}
