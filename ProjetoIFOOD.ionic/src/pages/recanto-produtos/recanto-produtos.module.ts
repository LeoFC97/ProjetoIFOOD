import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecantoProdutosPage } from './recanto-produtos';

@NgModule({
  declarations: [
    RecantoProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(RecantoProdutosPage),
  ],
})
export class RecantoProdutosPageModule {}
