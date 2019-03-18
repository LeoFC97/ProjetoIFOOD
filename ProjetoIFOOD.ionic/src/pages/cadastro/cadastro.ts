import { Cliente } from './../../providers/clientes/clientes';
import { AlertProvider } from './../../providers/alert/alert';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  id:number;
  nome: string;
  telefone: string;
  email: string;
  senha:string;
  estado: string;
  cidade:string;
  bairro:string;
  rua:string;
  numero:string;
  complemento:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private Alert: AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }



  confirmarCadastro():void {
    new Cliente(this.id,this.nome,this.telefone,this.email,this.senha,this.estado,this.cidade,this.bairro,this.rua,this.numero,this.complemento);
    this.Alert.toast('Cadastro realizado com sucesso','bottom');
    this.navCtrl.setRoot(LoginPage);

  }
  cancelar():void {
    this.navCtrl.setRoot(LoginPage);
  }
}
