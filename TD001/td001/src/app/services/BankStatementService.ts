import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {BankStatement} from '../models/BankStatement';
import {Observable} from 'rxjs/Observable';
import {AppComponent} from '../app.component';

@Injectable()
export class BankStatementService {

  constructor(private http: Http) {
  }

  createBankStatements(id, bankStatement: BankStatement, userId: any) {
    return this.http.post(AppComponent.API_URL + 'create/bankStatement/' + id + '?userId=' + userId, bankStatement).map((response: Response) => response.json());
  }

  getBankStatements(): Observable<BankStatement[]> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'get/bankStatement', options).map((response: Response) => response.json());
  }

  confirmBankStatements(id, email, paymentId, statementAmount, bankOrderId, bankStatement: BankStatement, userId: string, balance) {
    return this.http.put(AppComponent.API_URL + 'update/bankStatement/' + id + '?UserId=' + userId + '&' + 'Balance=' + balance + '&' + 'Email=' + email + '&' + 'transRef=' + paymentId + '&' + 'transAmount=' + statementAmount + '&' + 'orderId=' + bankOrderId, bankStatement).map((response: Response) => response.json());
  }

  getBankStatementsById(): Observable<BankStatement[]> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'get/bankStatement/{id}', options).map((response: Response) => response.json());
  }

}
