import {Injectable} from '@angular/core';
import {Order} from '../models/Order';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AppComponent} from '../app.component';

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  createOrders(orderPayment: Order, userId: any) {
    return this.http.post(AppComponent.API_URL + 'create/order' + '?userId=' + userId, orderPayment).map((response: Response) => response.json());
  }

  getPayments(): Observable<Order[]> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'get/orderAll', options).map((response: Response) => response.json());
  }

  getPaymentsById(id): Observable<Order[]> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getOrder/' + id, options).map((response: Response) => response.json());
  }

}
