import { CourseService } from './../services/CourseService';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { User } from '../models/User';
import { UserService } from '../services/User.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  url = AppComponent.API_URL;
  coinImg: string;
  ImgLogo: string;
  loading = false;
  currentUser: User;
  status: any;
  users: any = {};
  SearchAdvance: any = {};
  textPublic = 'true';
  show = true;

  constructor(private courseService: CourseService,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ImgLogo = '../../assets/images/tamdaiLogo.png';
    this.coinImg = '../../assets/images/coin.png';
  }

  ngOnInit() {
    if (this.currentUser !== null) {
      this.getUserId();
      this.show = false;
    }
  }

  logOut() {
    this.loading = true;
    console.log('Log Out');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);
  }

  private getUserId() {
    this.userService.getUserId(this.currentUser.id).subscribe(users => {
      this.users = users;
    });
  }

  home() {
    this.router.navigate(['/home']);
  }

  profile(id) {
    this.router.navigate(['/userProfile']);
  }

  insProfile(id) {
    console.log(id);
    this.router.navigate(['/insProfile', id]);
  }

  Search() {
    console.log('========================');
    console.log(this.SearchAdvance.Pname);
    this.router.navigate(['/HeaderSearch', this.SearchAdvance.Pname]);
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.router.navigate(['/HeaderSearch', this.SearchAdvance.Pname]);
    }
  }

  load() {
    location.reload();
  }

  click(id) {
    console.log('======================== Go to page');
    this.router.navigate(['/CourseLists', id]);
  }
}
