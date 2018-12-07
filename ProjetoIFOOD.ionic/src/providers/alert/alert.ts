import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

  constructor(private alertControl: AlertController, private toastControl:ToastController) {
    console.log('Hello AlertProvider Provider');
  }
  toast(title:string, position: string):void
  {
    let toast = this.toastControl.create({message:title, position: position, duration: 300});
    toast.present();
  }
  alert(title: string,message: string):void
  {
    this.alertControl.create({
    title:title,
    message: message,
    buttons: ['OK'],
    enableBackdropDismiss: false
    }).present();
  }
  confirm(title: string, message: string, callback: any): void{
    this.alertControl.create({
      title:title,
      message: message,
      buttons:
      [
        {
          text: "Nao",role:'Cancel',handler: () => 
          {
            console.log('Confirm:Say:No');
          }
        },
        {
          text: "Sim",
          handler:() =>
          {
            callback();
          }
        }
      ]
    })
    .present();
  }
}
