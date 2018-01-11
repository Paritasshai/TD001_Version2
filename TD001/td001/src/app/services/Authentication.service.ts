import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {AlertService} from '../alertContent/AlertService';
import {AppComponent} from '../app.component';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http,
              private router: Router,
              private alertService: AlertService) {
  }

  login(email: string, password: string) {
    return this.http.get(AppComponent.API_URL + 'user/login' + '?Email=' + email + '&' + 'Password=' + password).map((response: Response) => {

      // login successful if there's a jwt token in the response
      const user = response.json();
      // console.log(user);

      // console.log(user.firstName);
      // console.log(user.email);
      // console.log(user.statusUser[0].statusName);

      // if (localStorage.getItem('currentUser') === null) {
      if (user.status === 'new') {
        this.alertService.error('Please Activate Your Email Account');
        alert('Please Activate Your Email Account');
        this.router.navigate(['/home']);
      } else {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.alertService.success('Login successful', true);
      }
      // location.reload();
      return user;
      // }
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
