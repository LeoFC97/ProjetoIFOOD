import { Component, assertPlatform } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  selecionarCategoria(event):void
  {
    console.log('tab',event);
    console.log(event.tabTitle);

    if(event.tabTitle =='Categorias')
    {
      console.log("Entrou no if");
      this.app.getRootNav().setRoot('CategoriaPage');
    }
  }

}
