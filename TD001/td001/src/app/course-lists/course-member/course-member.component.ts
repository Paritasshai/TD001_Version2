import {Component, OnInit, ViewChild} from '@angular/core';
import {Http} from '@angular/http';
import {PurchaseCourseService} from '../../services/PurchaseCourseService';
import {UserService} from '../../services/User.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../../services/CourseService';
import {User} from '../../models/User';
import {AppComponent} from '../../app.component';
import {Modal, overlayConfigFactory} from "angular2-modal";
import {CourseComponent} from "../../alertContent/course/course.component";
import {BSModalContext} from "angular2-modal/plugins/bootstrap/src/modal-context";
import {AlertService} from "../../alertContent/AlertService";

@Component({
  selector: 'app-course-member',
  templateUrl: './course-member.component.html',
  styleUrls: ['./course-member.component.css']
})
export class CourseMemberComponent implements OnInit {

  url = AppComponent.API_URL;

  @ViewChild('videoPlayer') videoplayer: any;
  @ViewChild('videoPlayer1') videoplayer1: any;

  jsonp: any;
  courses: any = [];
  course: any = {};
  coursesList: any = [];
  coursesPurchaseed: any = [];
  users: any = [];
  usersId: any = [];
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
  // result: any;
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

  showIP = false;

  loading = true;
  show = false;

  name: any;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private purchaseCourseService: PurchaseCourseService,
              private http: Http,
              public modal: Modal,
              private alertService: AlertService) {

    const id = this.route.snapshot.params['id'];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  open() {
    //console.log("opennnnnnn");
    this.http.get('//api.ipify.org/?callback=Your IP Address: ')
      .subscribe(ipObj => {
        this.ipObj = ipObj;
        //console.log(this.ipObj);
      });

    // this.http.get(this.url + 'getClientIp')
    //   .subscribe(response => {
    //     this.ipObj = response;
    //     console.log(this.ipObj);
    //   });
  }

  ngOnInit() {

    setTimeout(() => {    //<<<---    using ()=> syntax
      this.loading = false;
      this.show = true;
    }, 3000);

    this.getCoursesById();
    this.getUserList();

    if (this.currentUser != undefined) {
      this.getCoursesByIdPurchased();
    }
    if (this.courses != undefined) {
      // this.getCourseList();
    }
    if (this.currentUser != undefined) {
      this.getUserList();
      this.getUserId();
    }
    this.open();
  }

  private getUserId() {
    this.userService.getUserId(this.currentUser.id).subscribe(usersId => {
      this.usersId = usersId;
    });
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  // private getCourseList() {
  //   this.courseService.getCourseItemsByPublic(this.textPublic).subscribe(courses => {
  //     this.coursesList = courses;
  //   });
  // }

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

  buyCourse(id, balance, price, name) {

    let that = this;
    this.alertService.confirmThis("ยืนยันการใช้แต้มเข้าเรียน?",

      function () {
        //ACTION: Do this If user says YES
        that.name = "Yes clicked";
        that.userId = that.currentUser.id;
        that.userBalance = balance;
        // console.log("your ID: " + id);
        // console.log("your balance: " + balance);
        // console.log("course price: " + price);
        // console.log("name: " + name);

        that.purchaseCourseService.createBuyCourse(that.userId, id, that.purchaseCart, that.userBalance, price, name).subscribe(
          data => {
            //alert('กรุณาตรวจสอบแต้มคงเหลือ..... \nยืนยันการใช้แต้มเข้าเรียน');
            location.reload();
          },
          error => {
            alert('มีบางอย่างผิดพลาดระบบกำลังตรวจสอบ');
          });

      }, function () {
        //ACTION: Do this if user says NO
        that.name = "No clicked";
        console.log('Refuse');
      })

    // const answer = confirm('\nยืนยันการใช้แต้มเข้าเรียน');
    // if (answer) {
    //
    //   this.userId = this.currentUser.id;
    //   this.userBalance = balance;
    //   // console.log("your ID: " + id);
    //   // console.log("your balance: " + balance);
    //   // console.log("course price: " + price);
    //   // console.log("name: " + name);
    //
    //   this.purchaseCourseService.createBuyCourse(this.userId, id, this.purchaseCart, this.userBalance, price, name).subscribe(
    //     data => {
    //       alert('กรุณาตรวจสอบแต้มคงเหลือ..... \nยืนยันการใช้แต้มเข้าเรียน');
    //       location.reload();
    //     },
    //     error => {
    //       alert('มีบางอย่างผิดพลาดระบบกำลังตรวจสอบ');
    //     });
    // } else {
    //   console.log('Refuse');
    // }
  }

  // TeacherHistory(email) {
  //   //console.log(email);
  //   //console.log("Get Teacher History");
  //   this.courseService.getTeacherHistory(email)
  //     .subscribe(historyIns => {
  //       this.historyIns = historyIns;
  //       // console.log(this.historyIns);
  //     });
  // }

  click(id) {
    this.router.navigate(['/CourseLists', id]);
    location.reload();
  }

  buyyy() {
     return this.modal.open(CourseComponent, overlayConfigFactory({num1: 2, num2: 3}, BSModalContext));
    // alert('กรุณายันการใช้แต้มเข้าเรียนก่อน');
  }

  insProfile(id) {
    console.log(id);
    this.router.navigate(['/insProfile', id]);
  }

  openVideo() {
    console.log('openVideo');
    console.log(this.videoplayer);
    this.videoplayer.nativeElement.pause();
  }

  openVideoBuy() {
    console.log('openVideoBuy');
    console.log(this.videoplayer1);
    this.videoplayer1.nativeElement.pause();
  }

}
