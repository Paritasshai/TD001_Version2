import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {CourseService} from '../../services/CourseService';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/User.service';
import {Http} from '@angular/http';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.css']
})
export class CourseAdminComponent implements OnInit {

  url = AppComponent.API_URL;

  courses: any = [];
  course: any = {};
  coursesList: any = [];
  users: any = [];
  image = 'image';
  video = 'video';
  text = 'text';
  truePreview = 'true';
  falsePreivew = 'false';
  statusInstructor = 'instructor';
  statusActive = 'active';
  admin = 'admin';
  currentUser: User;
  userId: any;
  carts: any = [];
  pathId = this.route.snapshot.params['id'];
  result: any;
  empty = 'null';
  historyIns: any = [];
  zero = '0';
  one = '1';
  ipObj: any = [];
  textPublic = 'true';
  nullText = 'null';
  textNull = 'null';
  value: any;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private http: Http) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  open() {
    console.log('opennnnnnn');
    this.http.get(this.url + 'getClientIp')
      .subscribe(response => {
        this.ipObj = response;
        console.log(this.ipObj);
      });
  }

  ngOnInit() {
    this.getCoursesById();
    this.getUserList();

    if (this.courses != undefined) {
      this.getCourseList();
    }
    if (this.currentUser != undefined) {
      this.getUserList();
    }
    this.open();
  }

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
      // console.log(this.courses);
    });
  }

  TeacherHistory(email) {
    // console.log(email);
    // console.log("Get Teacher History");
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

  insProfile(id) {
    console.log(id);
    this.router.navigate(['/insProfile', id]);
  }


  PauseYoutube(videoPath) {
    console.log('Close Video Youtube: ' + videoPath);
    const frame: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById(videoPath);
    // console.log(myVideo);
    // const frame = document.getElementById('player');
    // console.log(frame);
    frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }
}
