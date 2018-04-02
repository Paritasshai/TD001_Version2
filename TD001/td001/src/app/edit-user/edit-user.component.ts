import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/User.service';
import { FileUploader } from 'ng2-file-upload';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { AlertService } from '../alertContent/AlertService';

const URL = AppComponent.API_URL;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  currentUser: User;
  users: User[] = [];
  getUserId: any;
  userId: any;
  @ViewChild('fileInput') fileInput;
  User: any = {};
  editShow = false;
  editUserShow = true;

  constructor(private router: Router,
    private userService: UserService,
    private http: Http,
    private alertService: AlertService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getUserId = this.currentUser.id;
    console.log(this.getUserId);
  }

  ngOnInit() {
    this.getUserList();
    this.getUserId = this.currentUser.id;
    console.log(this.getUserId);

  }

  public upload() {
    const fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('files', fileBrowser.files[0]);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', URL + 'add/ImageUser' + '?userId=' + this.getUserId, true);
      xhr.onload = function () {
        if (this['status'] === 200) {
          const responseText = this['responseText'];
          const files = JSON.parse(responseText);
          location.reload();
          // todo: emit event
        } else {
          // todo: error handling
        }
      };
      xhr.send(formData);
    }
  }

  // public uploaderImageUser: FileUploader = new FileUploader({url: URL + 'add/ImageUser/' + '?userId=' + this.getUserId});
  // public hasBaseDropZoneOver = false;
  // public hasAnotherDropZoneOver = false;
  //
  // public fileOverBase(e: any): void {
  //   this.hasBaseDropZoneOver = e;
  // }
  //
  // public fileOverAnother(e: any): void {
  //   this.hasAnotherDropZoneOver = e;
  // }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  DeleteImage(id) {
    console.log(id);
    this.userId = this.currentUser.id;
    console.log(this.userId);

    const that = this;
    that.alertService.confirmThis('ลบรูปโปรไฟล์?',
      function () {
        console.log('Accept');
        that.userService.deleteImage(id, that.userId).subscribe(
          data => {
            location.reload();
          },
          error => {
            alert('Error');
          });
      }, function () {
        console.log('Refuse');
      });
  }

  update(getUserId, firstName, email, instructorBio) {
    console.log(getUserId);
    this.User.firstName = firstName;
    console.log(this.User.firstName);
    this.User.email = email;
    console.log(this.User.email);
    this.User.instructorBio = instructorBio;
    console.log(this.User.instructorBio);

    this.userService.updateUserProfile(getUserId, this.User.firstName, this.User.email, this.User.instructorBio, this.User).subscribe(
      data => {
        // alert("Delete Image Success");
        location.reload();
      },
      error => {
        alert('Error');
      });
  }

  editUser() {
    this.editShow = true;
    this.editUserShow = false;
  }

  out() {
    this.editShow = false;
    this.editUserShow = true;
  }

}
