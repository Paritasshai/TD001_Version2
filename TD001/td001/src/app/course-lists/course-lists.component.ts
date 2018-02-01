import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-course-lists',
  templateUrl: './course-lists.component.html',
  styleUrls: ['./course-lists.component.css']
})

export class CourseListsComponent implements OnInit {

  currentUser: User;
  null = 'null';
  active = 'active';
  instructor = 'instructor';
  admin = 'admin';

  activeShow = false;
  instructorShow = false;
  adminShow = false;
  nullShow = false;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    if (this.currentUser == null) {
      this.activeShow = false;
      this.instructorShow = false;
      this.adminShow = false;
      this.nullShow = true;
      console.log("null");
    } else if (this.currentUser.status == this.active) {
      this.activeShow = true;
      this.instructorShow = true;
      this.adminShow = false;
      this.nullShow = false;
      console.log("active");
    } else if (this.currentUser.status == this.instructor) {
      this.activeShow = true;
      this.instructorShow = true;
      this.adminShow = false;
      this.nullShow = false;
      console.log("instructor");
    } else if (this.currentUser.status == this.admin) {
      this.activeShow = true;
      this.instructorShow = false;
      this.adminShow = true;
      this.nullShow = false;
      console.log("admin");
    } else {
      console.log("error");
    }
  }

}
