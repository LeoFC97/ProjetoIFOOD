/*import { AlertProvider } from './../alert/alert';
import { SpinnerProvider } from './../spinner/spinner';
import { HttpClient } from '@angular/common/http';*/
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(/*private http: HttpClient, private spinnerSrv: SpinnerProvider, private alertSrv: AlertProvider*/) {
    console.log('Hello HttpProvider Provider');
  }

}
