import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/User.service';
import {CourseService} from '../../services/CourseService';
import {User} from '../../models/User';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-course-favor',
  templateUrl: './course-favor.component.html',
  styleUrls: ['./course-favor.component.css']
})
export class CourseFavorComponent implements OnInit {

  url = AppComponent.API_URL;
  currentUser: User;
  users: any = [];
  userId: any;
  empty = 'null';
  textNull = 'null';

  constructor(private userService: UserService,
              private courseService: CourseService,
              private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  click(id) {
    this.router.navigate(['/CourseLists', id]);
  }

  ngOnInit() {
    this.getUserList();
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  delete(id) {
    this.userId = this.currentUser.id;
    console.log(id);
    console.log(this.userId);
    this.courseService.DeleteUserCourse(id, this.userId).subscribe(
      data => {
        alert('Success');
        location.reload();
      },
      error => {
        alert('Error');
      });
  }

}
