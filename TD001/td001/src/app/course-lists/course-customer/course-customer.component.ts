import {Component, OnInit, ViewChild} from '@angular/core';
import {CourseService} from '../../services/CourseService';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/User.service';
import {Http} from '@angular/http';
import {User} from '../../models/User';
import {AppComponent} from '../../app.component';

import {BSModalContext, Modal} from 'angular2-modal/plugins/bootstrap';
import {overlayConfigFactory} from "angular2-modal";
import {CustomModalContextComponent} from "../../alertContent/custom-modal-context/custom-modal-context.component";

@Component({
  selector: 'app-course-customer',
  templateUrl: './course-customer.component.html',
  styleUrls: ['./course-customer.component.css'],
  providers: [Modal]
})
export class CourseCustomerComponent implements OnInit {

  url = AppComponent.API_URL;

  @ViewChild('videoPlayer') videoplayer: any;
  jsonp: any;
  courses: any = [];
  course: any = {};
  coursesList: any = [];
  coursesPurchaseed: any = [];
  users: any = [];
  image = 'image';
  video = 'video';
  text = 'text';
  truePreview = 'true';
  falsePreivew = 'false';
  statusInstructor = 'instructor';
  statusActive = 'active';
  admin = 'admin';
  // users: User[] = [];
  currentUser: User;
  userId: any;
  purchaseCart: any = {};
  carts: any = [];
  pathId = this.route.snapshot.params['id'];
  userBalance: any;
  coursePrice = 30;
  result: any;
  balance: any;
  empty = 'null';
  historyIns: any = [];
  userIdPurchase: any;
  zero = '0';
  one = '1';
  ipObj: any = [];
  textPublic = 'true';
  nullText = 'null';
  textNull = 'null';
  value: any;

  loading = true;
  show = false;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private http: Http,
              public modal: Modal) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  open() {
    // this.jsonp.get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK')
    //   .subscribe(response => {
    //     this.ipObj = response;
    //     console.log(this.ipObj);
    //   });
    this.http.get(this.url + 'getClientIp')
      .subscribe(response => {
        this.ipObj = response;
        console.log(this.ipObj);
      });
  }

  ngOnInit() {

    setTimeout(() => {    //<<<---    using ()=> syntax
      this.loading = false;
      this.show = true;
    }, 3000);

    this.getCoursesById();
    this.getUserList();
    this.getCourseList();
    if (this.currentUser != undefined) {
      this.getUserList();
    }
    //this.open();
  }

  openCustom() {
    return this.modal.open(CustomModalContextComponent,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }

  // buyCourseNull() {
  //   this.modal.alert()
  //     .size('lg')
  //     .showClose(true)
  //     .body(`<div align="center"><h4>เข้าสู่ระบบหรือสมัครสมาชิก</h4></div>`)
  //     .open();
  // }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  private getCourseList() {
    this.courseService.getCourseItemsByPublic(this.textPublic).subscribe(courses => {
      this.coursesList = courses;
    });
  }

  getCoursesById() {
    this.courseService.getCoursesById(this.route.snapshot.params['id']).subscribe(courses => {
      this.courses = courses;
    });
  }

  // buyCourseNull() {
  //
  //   alert('เข้าสู่ระบบหรือสมัครสมาชิก');
  // }

  TeacherHistory(email) {
    //console.log(email);
    //console.log("Get Teacher History");
    this.courseService.getTeacherHistory(email)
      .subscribe(historyIns => {
        this.historyIns = historyIns;
        // console.log(this.historyIns);
      });
  }

  click(id) {
    this.router.navigate(['/CourseLists', id]);
    location.reload();
  }

  buyyy() {
    return this.modal.open(CustomModalContextComponent,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }

  insProfile(id) {
    console.log(id);
    this.router.navigate(['/insProfile', id]);
  }

  openVideo() {
    console.log('================================');
    this.videoplayer.nativeElement.pause();
  }
}
