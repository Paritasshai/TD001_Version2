import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../models/User';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {List} from '../models/List';
import {AppComponent} from '../app.component';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getAll() {
    return this.http.get(AppComponent.API_URL + 'user/list', this.jwt()).map((response: Response) => response.json());
  }

  getIP() {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK', options).map((response: Response) => response.json());
  }

  deleteImage(id, userId: any) {
    return this.http.delete(AppComponent.API_URL + 'delete/ImageUser/' + '?imageId=' + id + '&' + 'userId=' + userId).map((response: Response) => response.json());
  }

  DeleteUserAccount(id) {
    return this.http.delete(AppComponent.API_URL + 'DeleteUserAccount/' + id).map((response: Response) => response.json());
  }

  createUsers(user: User) {
    return this.http.post(AppComponent.API_URL + 'user/register', user).map((response: Response) => response.json());
  }

  createLists(id: any, UserId: any, list: List) {
    return this.http.post(AppComponent.API_URL + 'user/addList/' + id + '?userId=' + UserId, list).map((response: Response) => response.json());
  }

  getUserId(id): Observable<User> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getUserId/' + id, options).map((response: Response) => response.json());
  }

  // private helper methods
  private jwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser) {
      const headers = new Headers({'Authorization': 'Bearer '});
      return new RequestOptions({headers: headers});
    }
  }

  updateUserStatus(id, statusName, user: User) {
    return this.http.put(AppComponent.API_URL + 'update/userStatus/' + id + '/' + '?statusName=' + statusName, user).map((response: Response) => response.json());
  }

  updateInstructorBio(getUserId, instructorBio: any, user: User) {
    return this.http.put(AppComponent.API_URL + 'updateInstructorBio/' + '?getUserId=' + getUserId + '&' + 'instructorBio=' + instructorBio, user).map((response: Response) => response.json());
  }

}

