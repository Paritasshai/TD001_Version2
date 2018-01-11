import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {BankStatement} from '../models/BankStatement';
import {Observable} from 'rxjs/Observable';
import {AppComponent} from '../app.component';

@Injectable()
export class PaymentTransService {

  constructor(private http: Http) {
  }

  getPaymentTrans(): Observable<BankStatement[]> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'get/PaymentTransaction', options).map((response: Response) => response.json());
  }

}
