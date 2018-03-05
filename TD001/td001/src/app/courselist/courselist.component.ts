import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/CourseService';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/User.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})

export class CourselistComponent implements OnInit {

  url = AppComponent.API_URL;

  Img1: string;
  list: any = [];
  courses: any = [];
  coursesss: any = [];
  coursesLego: any = [];
  coursesHousehold: any = [];
  coursesToy: any = [];
  coursesGarden: any = [];
  coursesIoT: any = [];
  coursesNew: any = [];
  coursesRecommend: any = [];
  coursesHot: any = [];
  instructor = 'instructor';
  admin = 'admin';
  currentUser: User;
  users: User[] = [];
  textTrue = 'true';
  textNull = 'null';
  textFalse = 'false';
  textPublic = 'true';
  active = 'active';
  newType = 'new';
  recommendType = 'recommend';
  hotType = 'hot';
  LegoText = 'Lego';
  HouseholdText = 'Household';
  ToyText = 'Toy';
  GardenText = 'Garden';
  IoTText = 'IoT';
  query: any;
  myVar = true;
  myVars = false;
  lego = false;
  household = false;
  toy = false;
  garden = false;
  iot = false;
  querySearch = false;
  querySearchPay = false;
  empty = 'null';
  courseSearch: any = [];
  UserId: any;
  List: any = {};

  loading = true;
  show = false;

  SearchAdvance: any = {};
  SelectedValue: string = null;

  constructor(private courseService: CourseService,
    private router: Router,
    private userService: UserService) {
    this.Img1 = '../../assets/images/001.jpg';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // console.clear();
  }

  deviceObjects = [
    { name: '---เลือก---', value: null },
    { name: 'Lego' },
    { name: 'Tech Household' },
    { name: 'Tech Toy' },
    { name: 'Tech Garden' },
    { name: 'IoT' },
    { name: 'All' }
  ];

  selectedDeviceObj = this.deviceObjects[0];

  daysObjects = [
    { name: '---เลือก---', value: null },
    { name: '1 วัน', value: 1 },
    { name: '1 สัปดาห์', value: 7 },
    { name: '1 เดือน', value: 30 },
    { name: '1 ปี', value: 365 }
  ];

  selectedDayObj = this.daysObjects[0];

  onChangeObj(newObj) {
    this.show = true;
    this.selectedDeviceObj = newObj;
    console.log(this.selectedDeviceObj.name);
    // ... do other stuff here ...
  }

  onChangeObjj(newObjj) {
    this.show = true;
    this.selectedDayObj = newObjj;
    console.log(this.selectedDayObj.name);
    // ... do other stuff here ...
  }

  ngOnInit() {
    this.show = true;
    this.loading = false;
    // setTimeout(() => {
    //   this.loading = false;
    //   this.show = true;
    // }, 3000);

    // if (this.courses !== undefined) {
    //   this.getCourseList();
    // }
    // if (this.currentUser !== undefined) {
    //   this.getUserList();
    // }
    this.getCourses();
    this.getCourseList();
    // this.getCourseNewType();
    this.getCourseRecommendType();
    // this.getCourseHotType();
  }

  public searchItem(query) {
    this.myVar = false;
    this.lego = false;
    this.myVars = false;
    this.household = false;
    this.toy = false;
    this.garden = false;
    this.iot = false;
    this.querySearch = true;
    // console.log(query);

    this.courseService.getSearchByName(query, this.textPublic).subscribe(courseSearch => {
      this.courseSearch = courseSearch;
    });
  }

  searchAdvance() {
    this.myVar = false;
    this.lego = false;
    this.myVars = false;
    this.household = false;
    this.toy = false;
    this.garden = false;
    this.iot = false;
    this.querySearch = false;
    this.querySearchPay = false;

    this.SearchAdvance.rbGroup = this.selectedDeviceObj.name;
    this.SearchAdvance.day = this.selectedDayObj.value;
    console.log('Day: ' + this.SearchAdvance.day);
    // console.log(this.SearchAdvance);

    // this.courseService.getSearchByDate(this.SearchAdvance.day, this.textPublic).subscribe(courseSearch => {
    //   this.courseSearch = courseSearch;
    // });

    if (this.SearchAdvance.free === true && this.SearchAdvance.Pname != null) {
      this.querySearch = true;
      this.querySearchPay = false;
      // alert("Free True && Pname");
      this.courseService.getSearchObjectFreePname(this.SearchAdvance.Pname, this.textNull, this.textPublic).subscribe(courseSearch => {
        this.courseSearch = courseSearch;
      });
    } else if (this.SearchAdvance.free === true) {
      // alert("Free True");
      this.querySearch = true;
      this.querySearchPay = false;
      this.courseService.getSearchByFree(this.empty, this.textPublic).subscribe(courseSearch => {
        this.courseSearch = courseSearch;
      });
    } else if (this.SearchAdvance.rbGroup === this.LegoText) {
      // alert("Lego");
      this.querySearch = true;
      this.querySearchPay = false;
      this.courseService.getCourseItemsByLegoPublic(this.LegoText, this.textPublic).subscribe(courseSearch => {
        this.courseSearch = courseSearch;
      });
    } else if (this.SearchAdvance.rbGroup === 'Tech Household') {
      // alert("HouseholdText");
      this.querySearch = true;
      this.querySearchPay = false;
      this.courseService.getCourseItemsByHouseholdPublic(this.HouseholdText, this.textPublic).subscribe(courseSearch => {
        this.courseSearch = courseSearch;
      });
    } else if (this.SearchAdvance.rbGroup === 'Tech Toy') {
      // alert("ToyText");
      this.querySearch = true;
      this.querySearchPay = false;
      this.courseService.getCourseItemsByToyPublic(this.ToyText, this.textPublic).subscribe(courseSearch => {
        this.courseSearch = courseSearch;
      });
    } else if (this.SearchAdvance.rbGroup === 'Tech Garden') {
      // alert("GardenText");
      this.querySearch = true;
      this.querySearchPay = false;
      this.courseService.getCourseItemsByGardenPublic(this.GardenText, this.textPublic).subscribe(courseSearch => {
        this.courseSearch = courseSearch;
      });
    } else if (this.SearchAdvance.rbGroup === 'IoT') {
      // alert("IoTText");
      this.querySearch = true;
      this.querySearchPay = false;
      this.courseService.getCourseItemsByIoTPublic(this.IoTText, this.textPublic).subscribe(courseSearch => {
        this.courseSearch = courseSearch;
      });
    } else if (this.SearchAdvance.Pname != null) {
      // alert("Pname");
      this.querySearch = true;
      this.querySearchPay = false;
      this.courseService.getSearchByName(this.SearchAdvance.Pname, this.textPublic).subscribe(courseSearch => {
        this.courseSearch = courseSearch;
      });
    } else if (this.SearchAdvance.Pname != null && this.SearchAdvance.Pname != null && this.SearchAdvance.rbGroup !== 'Select Group') {
      // alert("Free True && Pname && Group");
      this.querySearch = true;
      this.querySearchPay = false;
      this.courseService.getSearchObject(this.SearchAdvance.Pname, this.textNull, this.SearchAdvance.rbGroup, this.textPublic).subscribe(courseSearch => {
        this.courseSearch = courseSearch;
      });
    } else if (this.SearchAdvance.day != null) {
      // alert("Free True && Pname && Group");
      console.log(this.SearchAdvance.day);
      this.querySearch = true;
      this.querySearchPay = false;
      this.courseService.getSearchByDate(this.SearchAdvance.day, this.textPublic).subscribe(courseSearch => {
        this.courseSearch = courseSearch;
      });
    } else {
      // alert("else");
      this.querySearch = true;
      this.querySearchPay = false;
      this.courseService.getCourseItemsByPublic(this.textPublic).subscribe(courseSearch => {
        this.courseSearch = courseSearch;
      });
    }

    // =============================================================================================
  }

  public BAll() {
    this.myVar = true;
    this.myVars = false;
    this.lego = false;
    this.household = false;
    this.toy = false;
    this.garden = false;
    this.iot = false;
    this.querySearch = false;
  }

  public All() {
    this.myVar = false;
    this.myVars = true;
    this.lego = false;
    this.household = false;
    this.toy = false;
    this.garden = false;
    this.iot = false;
    this.querySearch = false;
  }

  // public Lego() {
  //   this.myVars = false;
  //   this.myVar = false;
  //   this.lego = true;
  //   this.household = false;
  //   this.toy = false;
  //   this.garden = false;
  //   this.iot = false;
  //   this.querySearch = false;
  //   // console.log("Lego");
  //   this.courseService.getCourseItemsByLegoPublic(this.LegoText, this.textPublic).subscribe(coursesLego => {
  //     this.coursesLego = coursesLego;
  //   });
  // }
  //
  // public Household() {
  //   this.myVars = false;
  //   this.myVar = false;
  //   this.lego = false;
  //   this.household = true;
  //   this.toy = false;
  //   this.garden = false;
  //   this.iot = false;
  //   this.querySearch = false;
  //   // console.log("Household");
  //   this.courseService.getCourseItemsByHouseholdPublic(this.HouseholdText, this.textPublic).subscribe(coursesHousehold => {
  //     this.coursesHousehold = coursesHousehold;
  //   });
  // }
  //
  // public Toy() {
  //   this.myVars = false;
  //   this.myVar = false;
  //   this.lego = false;
  //   this.household = false;
  //   this.toy = true;
  //   this.garden = false;
  //   this.iot = false;
  //   this.querySearch = false;
  //   // console.log("Toy");
  //   this.courseService.getCourseItemsByToyPublic(this.ToyText, this.textPublic).subscribe(coursesToy => {
  //     this.coursesToy = coursesToy;
  //   });
  // }
  //
  // public Garden() {
  //   this.myVars = false;
  //   this.myVar = false;
  //   this.lego = false;
  //   this.household = false;
  //   this.toy = false;
  //   this.garden = true;
  //   this.iot = false;
  //   this.querySearch = false;
  //   // console.log("Garden");
  //   this.courseService.getCourseItemsByGardenPublic(this.GardenText, this.textPublic).subscribe(coursesGarden => {
  //     this.coursesGarden = coursesGarden;
  //   });
  // }
  //
  // public IoT() {
  //   this.myVars = false;
  //   this.myVar = false;
  //   this.lego = false;
  //   this.household = false;
  //   this.toy = false;
  //   this.garden = false;
  //   this.iot = true;
  //   this.querySearch = false;
  //   // console.log("IoT");
  //   this.courseService.getCourseItemsByIoTPublic(this.IoTText, this.textPublic).subscribe(coursesIoT => {
  //     this.coursesIoT = coursesIoT;
  //   });
  // }

  private getCourses() {
    this.courseService.getSearchObjectPay(this.textNull, this.textPublic).subscribe(coursesss => {
      this.coursesss = coursesss;
      // console.log(this.courses);
    });
  }

  private getCourseList() {
    this.courseService.getCourseItemsByPublic(this.textPublic).subscribe(courses => {
      this.courses = courses;
      // console.log(this.courses);
    });
  }

  // private getCourseNewType() {
  //   this.courseService.getCoursenewType(this.newType, this.textPublic).subscribe(coursesNew => {
  //     this.coursesNew = coursesNew;
  //     // console.log(this.coursesNew);
  //   });
  // }

  private getCourseRecommendType() {
    this.courseService.getCourseRecommendType(this.recommendType, this.textPublic).subscribe(coursesRecommend => {
      this.coursesRecommend = coursesRecommend;
      // console.log(this.coursesRecommend);
    });
  }

  // private getCourseHotType() {
  //   this.courseService.getCourseHotType(this.hotType, this.textPublic).subscribe(coursesHot => {
  //     this.coursesHot = coursesHot;
  //     // console.log(this.coursesHot);
  //   });
  // }

  click(id) {
    this.router.navigate(['/CourseLists', id]);
  }

  // private getUserList() {
  //   this.userService.getAll().subscribe(users => {
  //     this.users = users;
  //   });
  // }

  addToList(id) {
    if (this.currentUser == null) {
      alert('เข้าสู่ระบบหรือสมัครสมาชิก');
    } else if (this.currentUser.status === this.admin || this.currentUser.status === this.instructor) {
      alert('คุณไม่สามารถใช้ฟังค์ชันนี้ได้');
    } else {
      this.UserId = this.currentUser.id;
      // console.log("Course ID: " + id);
      // console.log("User ID: " + this.UserId);
      this.userService.createLists(id, this.UserId, this.List)
        .subscribe(
          data => {
            alert('เพิ่มโปรเจคลงในลิสต์เรียบร้อยแล้ว');
          },
          error => {
            alert('Failed');
          });
    }
  }

}
