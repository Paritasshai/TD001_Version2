import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/CourseService';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/User.service';
import { PurchaseCourseService } from '../../services/PurchaseCourseService';
import { Http } from '@angular/http';
import { User } from '../../models/User';
import { AppComponent } from '../../app.component';
import { AlertService } from '../../alertContent/AlertService';

@Component({
  selector: 'app-course-ins',
  templateUrl: './course-ins.component.html',
  styleUrls: ['./course-ins.component.css']
})
export class CourseInsComponent implements OnInit {

  url = AppComponent.API_URL;

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
    private purchaseCourseService: PurchaseCourseService,
    private http: Http,
    private alertService: AlertService) {

    const id = this.route.snapshot.params['id'];
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

    setTimeout(() => {
      this.loading = false;
      this.show = true;
    }, 3000);

    this.getUserList();
    this.getCoursesById();
    if (this.currentUser !== undefined) {
      this.getCoursesByIdPurchased();
    }
    if (this.courses !== undefined) {
      this.getCourseList();
    }
    if (this.currentUser !== undefined) {
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
    });
  }

  getCoursesByIdPurchased() {
    this.userIdPurchase = this.currentUser.id;
    this.courseService.getCoursesByIdPurchased(this.route.snapshot.params['id'], this.userIdPurchase).subscribe(coursesPurchaseed => {
      this.coursesPurchaseed = coursesPurchaseed;
    });
  }

  getCarts() {
    this.purchaseCourseService.getCarts().subscribe(carts => {
      this.carts = carts;
    });
  }

  EditItem(id) {
    console.log(id);
    this.router.navigate(['/addItem', id]);
  }

  buyCourseNull() {
    alert('เข้าสู่ระบบหรือสมัครสมาชิก');
  }

  TeacherHistory(email) {
    this.courseService.getTeacherHistory(email)
      .subscribe(historyIns => {
        this.historyIns = historyIns;
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

  playPause(id) {
    console.log('Close Video : ' + id);
    // let inputFields = document.getElementsByClassName('settings') as HTMLInputElement
    const myVideo: HTMLVideoElement = <HTMLVideoElement>document.getElementById(id);
    if (myVideo.paused) {
      myVideo.pause();
    } else {
      myVideo.pause();
    }
  }

  PauseYoutube(videoPath) {
    console.log('Close Video Youtube: ' + videoPath);
    const frame: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById(videoPath);
    // console.log(myVideo);
    // const frame = document.getElementById('player');
    // console.log(frame);
    frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }

  buyCourse(countPurchase, id, balance, price, name) {

    const that = this;
    this.alertService.confirmThis('คุณมีแต้มคงเหลือ ' + balance,

      function () {
        // ACTION: Do this If user says YES
        // that.name = ' Yes clicked ';
        console.log('Accept');
        that.userId = that.currentUser.id;
        that.userBalance = balance;
        console.log('Count: ' + countPurchase);

        that.purchaseCourseService.createBuyCourse(countPurchase, that.userId, id, that.purchaseCart, that.userBalance, price, name).subscribe(
          data => {
            alert('ซื้อเรียบร้อยแล้ว แต้มคงเหลือ' + (balance - price));
            location.reload();
          },
          error => {
            that.alertService.confirmThis('แต้มไม่เพียงพอ ไปยังหน้าสำหรับซื้อแต้ม',
              function () {
                that.router.navigate(['/topUpOnline']);
              }, function () {
                console.log('ไม่จ่าย');
              });
          });

      }, function () {
        // ACTION: Do this if user says NO
        // that.name = ' No clicked ';
        console.log('Refuse');
      });
  }

}
