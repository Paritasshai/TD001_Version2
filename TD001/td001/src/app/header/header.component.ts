import { CourseService } from './../services/CourseService';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { User } from '../models/User';
import { UserService } from '../services/User.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  ImgLogo: string;
  loading = false;
  currentUser: User;
  status: any;
  users: User[] = [];
  SearchAdvance: any = {};
  courseSearch: any = [];
  textPublic = 'true';

  constructor(private courseService: CourseService,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ImgLogo = '../../assets/images/tamdaiLogo.png';
  }

  ngOnInit() {
    this.getUserList();
  }

  logOut() {
    this.loading = true;
    console.log('Log Out');
    setTimeout(() => {
      this.authenticationService.logout();
      window.location.reload();
    }, 1000);
    this.router.navigate(['/home']);
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      if (this.users !== undefined) {
        this.users = users;
      }
    });
  }

  home() {
    this.router.navigate(['/home']);
  }

  profile() {
    this.router.navigate(['/userProfile']);
  }

  insProfile(id) {
    console.log(id);
    this.router.navigate(['/insProfile', id]);
  }

  Search() {
    console.log('========================');
    console.log(this.SearchAdvance.Pname);
    this.courseService.getSearchByName(this.SearchAdvance.Pname, this.textPublic).subscribe(response => {
      this.courseSearch = response;
    });
  }
}
