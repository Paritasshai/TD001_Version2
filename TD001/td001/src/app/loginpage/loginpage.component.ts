import {Component, OnInit} from '@angular/core';
import {User} from '../models/User';
import {AuthenticationService} from '../services/Authentication.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {
  ImgLogo: string;
  ImgLogin: string;
  users: User[] = [];
  model: any = {};
  loading = false;
  token: any;
  loged = false;
  user: any = {};
  User: {};

  constructor(private authenticationService: AuthenticationService) {

    this.ImgLogo = '../../assets/images/logo.png';
    this.ImgLogin = '../../assets/images/login.jpg';
  }

  loginWithFacebook() {
    // return this.http.get('http://localhost:8080/user/facebook')
    //   .subscribe(
    //     data => {
    //       //alert("Success");
    //       this.loading = false;
    //     },
    //     error => {
    //       alert("Failed");
    //       this.loading = false;
    //     });
  }

  ngOnInit() {
  }

  signIn() {
    this.loading = true;

    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          // alert("Success");
          this.loading = false;
          location.reload();
        },
        error => {
          alert('อีเมล์หรือพาสเวิร์ดไม่ถูกต้อง \n กรุณาลองใหม่อีกครั้ง!!');
          this.loading = false;
        });
  }
}
