import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AppComponent} from '../app.component';

@Injectable()
export class forgotPassword {

  constructor(private http: Http) {
  }

  forgot(email: string) {
    return this.http.get(AppComponent.API_URL + 'user/forgotPassword' + '?Email=' + email);
  }
}
