import { Carrinho,MeusPedidosPage } from './../meus-pedidos/meus-pedidos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertProvider } from './../../providers/alert/alert';


/**
 * Generated class for the RecantoProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recanto-produtos',
  templateUrl: 'recanto-produtos.html',
})
export class RecantoProdutosPage {

    public RecantoItensSelecionado = new Carrinho();

  constructor(public navCtrl: NavController, public navParams: NavParams,  private Alert: AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecantoProdutosPage');
  }
  produtos = [
    'Espeto Simples          R$: 9.99',
    'Espetinho Duplo         R$: 12.90',
    'Quentinha simples       R$: 15.00',
    'Almoço executivo        R$: 22.00',
    'Linguiça com farofa     R$: 8.00',
  ];

  SelecionarItem(produto: string) {
    this.Alert.toast('Produto adicionado com sucesso','bottom');
    console.log("Item Selecionado:", produto);
    this.RecantoItensSelecionado.adicionarNoCarrinho(produto);
    this.RecantoItensSelecionado.mostrarCarrinho();
  }
}
