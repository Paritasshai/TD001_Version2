import {Component, OnInit} from '@angular/core';
import {CourseService} from '../../services/CourseService';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/User.service';
import {PurchaseCourseService} from '../../services/PurchaseCourseService';
import {Http} from '@angular/http';
import {User} from '../../models/User';
import {AppComponent} from '../../app.component';

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
              private purchaseCourseService: PurchaseCourseService,
              private http: Http) {

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

    setTimeout(() => {    //<<<---    using ()=> syntax
      this.loading = false;
      this.show = true;
    }, 3000);

    this.getUserList();
    this.getCoursesById();
    if (this.currentUser != undefined) {
      this.getCoursesByIdPurchased();
    }
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

  getCoursesByIdPurchased() {
    this.userIdPurchase = this.currentUser.id;
    // console.log(this.userIdPurchase);
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

  buyCourse(id, balance, price, name) {
    this.userId = this.currentUser.id;
    // console.log("ID: " + id);
    console.log('your balance: ' + balance);
    console.log('course price: ' + price);
    // console.log("name: " + name);
    // console.log("user ID: " + this.userId);
    // console.log("course price fix 30 bath: "+this.coursePrice);

    if (balance > price) {
      this.result = parseInt(balance) - parseInt(price);
      console.log('Result: ' + this.result);

      return this.purchaseCourseService.createBuyCourse(this.userId, id, this.purchaseCart, this.result, price, name).subscribe(
        data => {
          alert('Success');
          location.reload();
        },
        error => {
          alert('Failed');
        });
    } else if (balance == price) {
      this.result = parseInt(balance) - parseInt(price);
      console.log('Result: ' + this.result);

      return this.purchaseCourseService.createBuyCourse(this.userId, id, this.purchaseCart, this.result, price, name).subscribe(
        data => {
          alert('Success');
          location.reload();
        },
        error => {
          alert('Failed');
        });
    } else if (balance < price) {
      alert('Your balance not enough!');
    } else {
      alert('failed');
    }

    //  (balance < price) {
    //   alert("Your balance not enough!!")
    // }
    // else if (balance = price) {
    //     this.result = balance - price;
    //     console.log(this.result);
    //     this.purchaseCourseService.createBuyCourse(this.userId, id, this.purchaseCart, this.result, price, name).subscribe(
    //       data => {
    //         alert("Success");
    //         location.reload();
    //       },
    //       error => {
    //         alert("Failed");
    //       });
    //   }

  }

  buyCourseNull() {
    alert('เข้าสู่ระบบหรือสมัครสมาชิก');
  }

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

  insProfile(id) {
    console.log(id);
    this.router.navigate(['/insProfile', id]);
  }
}
