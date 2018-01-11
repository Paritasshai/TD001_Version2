import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {PurchaseCard} from '../models/PurchaseCard';
import {Observable} from 'rxjs/Observable';
import {AppComponent} from '../app.component';

@Injectable()
export class PurchaseCourseService {

  constructor(private http: Http) {
  }

  createBuyCourse(userId, id, purchaseCart: PurchaseCard, userBalance: any, price, name) {
    return this.http.post(AppComponent.API_URL + 'saveCart/' + '?userId=' + userId + '&' + 'courseId=' + id + '&' + 'transAmount=' + price + '&' + 'userBalance=' + userBalance + '&' + 'courseName=' + name, purchaseCart).map((response: Response) => response.json());
  }

  getCarts(): Observable<PurchaseCard[]> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getPurchaseCartList', options).map((response: Response) => response.json());
  }

}
