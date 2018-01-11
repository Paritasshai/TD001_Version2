import {Component, OnInit} from '@angular/core';
import {forgotPassword} from '../services/ForgotPassword';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {
  User: any = {};
  loading: false;

  constructor(private forgotPasswordService: forgotPassword) {
  }

  ngOnInit() {
  }

  forgotPassword() {
    console.log('Submit Email');
    console.log(this.User.email);
    this.forgotPasswordService.forgot(this.User.email)
      .subscribe(
        data => {
          alert('Success!! \n Please checks your email.');
          this.loading = false;
        },
        error => {
          alert('Failed');
          this.loading = false;
        });
  }

}
