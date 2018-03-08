import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CourseService } from '../../services/CourseService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-recom',
  templateUrl: './project-recom.component.html',
  styleUrls: ['./project-recom.component.css']
})
export class ProjectRecomComponent implements OnInit {

  url = AppComponent.API_URL;
  coursesss: any = [];
  coursesRecommend: any = [];
  coursesLego: any = [];
  coursesHousehold: any = [];
  coursesToy: any = [];
  coursesGarden: any = [];
  coursesIoT: any = [];

  LegoText = 'Lego';
  HouseholdText = 'Household';
  ToyText = 'Toy';
  empty = 'null';
  textTrue = 'true';
  textNull = 'null';
  textPublic = 'true';

  constructor(private courseService: CourseService,
    private router: Router) { }

  ngOnInit() {
    this.getCourses();
    this.getCoursesLego();
    this.getCoursesHousehold();
    this.getCoursesToy();
  }

  private getCourses() {
    this.courseService.getSearchObjectPay(this.textNull, this.textPublic).subscribe(coursesss => {
      this.coursesss = coursesss;
    });
  }

  private getCoursesLego() {
    this.courseService.getCourseItemsByLegoPublic(this.LegoText, this.textPublic).subscribe(coursesLego => {
      this.coursesLego = coursesLego;
    });
  }

  private getCoursesHousehold() {
    this.courseService.getCourseItemsByHouseholdPublic(this.HouseholdText, this.textPublic).subscribe(coursesHousehold => {
      this.coursesHousehold = coursesHousehold;
    });
  }


  private getCoursesToy() {
    this.courseService.getCourseItemsByToyPublic(this.ToyText, this.textPublic).subscribe(coursesToy => {
      this.coursesToy = coursesToy;
    });
  }

  click(id) {
    console.log(id);
    this.router.navigate(['/CourseLists', id]);
    setTimeout(function () {
      location.reload();
    }, 1000);
  }

}
