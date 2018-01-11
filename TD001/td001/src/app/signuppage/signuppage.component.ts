import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/User.service';
import {AlertService} from '../alertContent/AlertService';

@Component({
  moduleId: module.id,
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})

export class SignuppageComponent implements OnInit {

  User: any = {};
  loading = false;
  ImgSignUp: string;
  ImgLogo: string;

  constructor(private router: Router,
              private userService: UserService,
              private alertService: AlertService) {

    this.ImgLogo = '../../assets/images/logo.png';
    this.ImgSignUp = '../../assets/images/signUp.jpg';
  }

  ngOnInit() {
  }

  signUp() {
    this.loading = true;
    // console.log(this.User);
    this.userService.createUsers(this.User)
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          // alert("Please Activate Your Email Account");
          alert('Please Activate Your Email');
          location.reload();
          this.router.navigate(['/home']);
          this.loading = false;
        },
        error => {
          // this.alertService.error('This email already exists', true);
          alert('Registration Failed');
          this.loading = false;
        });
  }

}
