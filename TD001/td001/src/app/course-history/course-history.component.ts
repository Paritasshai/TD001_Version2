import { PurchaseCourseService } from './../services/PurchaseCourseService';
import { PurchaseCard } from './../models/PurchaseCard';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/User.service';
import { CourseService } from '../services/CourseService';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-course-history',
  templateUrl: './course-history.component.html',
  styleUrls: ['./course-history.component.css']
})
export class CourseHistoryComponent implements OnInit {

  url = AppComponent.API_URL;

  currentUser: User;
  users: any = [];
  PurchaseCards: any = [];
  userId: any;
  empty = 'null';
  textNull = 'null';

  constructor(private userService: UserService,
    private courseService: CourseService,
    private router: Router,
    private purchaseCourseService: PurchaseCourseService) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  click(id) {
    this.router.navigate(['/CourseLists', id]);
  }

  ngOnInit() {
    this.getUserList();
    this.PurchaseCardList();
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  private PurchaseCardList() {
    this.purchaseCourseService.getPurchaseCardList().subscribe(PurchaseCards => {
      this.PurchaseCards = PurchaseCards;
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
