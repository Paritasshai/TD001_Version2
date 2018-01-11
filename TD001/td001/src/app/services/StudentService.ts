import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Student} from '../models/Student';
import {Observable} from 'rxjs/Observable';
import {AppComponent} from '../app.component';

@Injectable()
export class StudentService {

  constructor(private http: Http) {
  }

  createProfile(stProfile: Student) {
    return this.http.post(AppComponent.API_URL + 'createProfile', stProfile).map((response: Response) => response.json());
  }

  roboticName(roboticName: Student) {
    return this.http.post(AppComponent.API_URL + 'createRoboticName', roboticName).map((response: Response) => response.json());
  }

  roboticDelete(id) {
    return this.http.delete(AppComponent.API_URL + 'delete/roboticDelete/' + '?roboticId=' + id).map((response: Response) => response.json());
  }

  getSearchGroup(name: any): Observable<Student[]> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getSearchGroup/' + '?name=' + name, options).map((response: Response) => response.json());
  }


  // roboticDelete(id, robotic: Student) {
  //   return this.http.post(AppComponent.API_URL + 'roboticDelete/' + "?roboticId=" + id, robotic).map((response: Response) => response.json());
  // }

  createComment(comment: any, id: any) {
    return this.http.post(AppComponent.API_URL + 'createComment/' + id, comment).map((response: Response) => response.json());
  }

  getStudentList(): Observable<Student[]> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getStudentList', options).map((response: Response) => response.json());
  }

  getRoboticLists(): Observable<Student[]> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'RoboticNameList', options).map((response: Response) => response.json());
  }

  getContentList(): Observable<Student[]> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getContentList', options).map((response: Response) => response.json());
  }

  getStudentId(id): Observable<Student> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getStudent/' + id, options).map((response: Response) => response.json());
  }

  getStudentStId(stStudentId: any): Observable<Student> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getStudentStId/' + '?stStudentId=' + stStudentId, options).map((response: Response) => response.json());
  }

  getContentId(id): Observable<Student> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getContent/' + id, options).map((response: Response) => response.json());
  }

  getStudentBySearch(username: any, date: any): Observable<Student> {
    const headers = new Headers({'Authorization': 'Bearer '});
    const options = new RequestOptions({headers: headers});

    return this.http.get(AppComponent.API_URL + 'getStudentBySearch/' + '?username=' + username + '&' + 'date=' + date, options).map((response: Response) => response.json());
  }

  editStudentProfile(id, stId, stNickname, stFirstname, stLastname, stSchool,
                     stDate, stAge, stParent, stEmail, stMobile, stStart, stProfile: Student) {
    return this.http.put(AppComponent.API_URL + 'editProfile/' + id + '?stId=' + stId + '&' + 'stNickname=' + stNickname + '&' + 'stFirstname=' + stFirstname + '&' + 'stLastname=' + stLastname + '&' + 'stSchool=' + stSchool + '&' + 'stDate=' + stDate + '&' + 'stAge=' + stAge + '&' + 'stParent=' + stParent + '&' + 'stEmail=' + stEmail + '&' + 'stMobile=' + stMobile + '&' + 'stStart=' + stStart, stProfile).map((response: Response) => response.json());
  }

  editContent(id, stStudentId: any, stTime: any, stContent: any, stTeacher: any, contentDate: any, rbName: any, rbGroup: any, content: Student) {
    return this.http.put(AppComponent.API_URL + 'editContent/' + id + '?stStudentId=' + stStudentId + '&' + 'stTime=' + stTime + '&' + 'stContent=' + stContent + '&' + 'stTeacher=' + stTeacher + '&' + 'contentDate=' + contentDate + '&' + 'rbName=' + rbName + '&' + 'rbGroup=' + rbGroup, content).map((response: Response) => response.json());
  }

  deleteImage(id, stId: any) {
    return this.http.delete(AppComponent.API_URL + 'delete/ImageStudent/' + '?imageId=' + id + '&' + 'stId=' + stId).map((response: Response) => response.json());
  }

  deleteImageContent(id, ctId: any) {
    return this.http.delete(AppComponent.API_URL + 'deleteImageContent/' + '?imageId=' + id + '&' + 'ctId=' + ctId).map((response: Response) => response.json());
  }

  deleteContent(id, stStudentId: any) {
    return this.http.delete(AppComponent.API_URL + 'deleteContent/' + '?id=' + id + '&' + 'stStudentId=' + stStudentId).map((response: Response) => response.json());
  }

  deleteProfile(id) {
    return this.http.delete(AppComponent.API_URL + 'deleteProfile/' + '?studentId=' + id).map((response: Response) => response.json());
  }

  addContent(stIdPath: any, Content: Student) {
    return this.http.post(AppComponent.API_URL + 'addContent' + '?stIdPath=' + stIdPath, Content).map((response: Response) => response.json());
  }
}

