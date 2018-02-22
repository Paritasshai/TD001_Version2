import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/User.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../../services/CourseService';
import {AppComponent} from '../../app.component';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.css']
})
export class InstructorProfileComponent implements OnInit {

  currentUser: User;
  users: User[] = [];
  userId: any;
  @ViewChild('fileInput') fileInput;
  User: any = {};

  usersId: any = [];
  coursesList: any = [];
  textPublic = 'true';
  url = AppComponent.API_URL;
  textNull = 'null';
  empty = 'null';

  constructor( private userService: UserService,
               private courseService: CourseService,
               private route: ActivatedRoute,
               private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getUserId();
    this.getCourseByUserId();
  }

  private getCourseByUserId() {
    this.courseService.getCourseByUserId(this.route.snapshot.params['id'], this.textPublic).subscribe(courses => {
      this.coursesList = courses;
    });
  }

  private getUserId() {
    this.userService.getUserId(this.route.snapshot.params['id']).subscribe(usersId => {
      this.usersId = usersId;
    });
  }

  click(id) {
    this.router.navigate(['/CourseLists', id]);
  }

}
