import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Student} from '../models/Student';
import {StudentService} from '../services/StudentService';
import {User} from '../models/User';
import {UserService} from '../services/User.service';

@Component({
  selector: 'app-robomind',
  templateUrl: './robomind.component.html',
  styleUrls: ['./robomind.component.css']
})
export class RobomindComponent implements OnInit {

  students: Student[] = [];
  Profile: any = {};
  currentUser: User;
  users: User[] = [];
  Student: any = {};
  ImgLogo: string;
  instructor = 'instructor';

  constructor(private router: Router,
              private studentService: StudentService,
              private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ImgLogo = '../../assets/images/logo_web.png';
  }

  ngOnInit() {
    this.getStudentList();
    this.getUserList();
  }

  search() {
    console.log(this.Student.username);
    console.log(this.Student.date);
    this.studentService.getStudentBySearch(this.Student.username, this.Student.date).subscribe(Profile => {
        // this.alertService.success('Registration successful', true);
        this.Profile = Profile;
        console.log(this.Profile);
        console.log(this.Profile.id);
        this.router.navigate(['/RobomindReview', this.Profile.id]);
        // this.router.navigate(['/RobomindReview', this.Profile]);
        // alert('ค้นพบรายชื่อ: ' + this.Profile.stFirstname + ' ' + this.Profile.stLastname);
      },
      error => {
        // this.alertService.error('This email already exists', true);
        alert( 'Not Found!!');
        location.reload();
      });
  }

  RobomindContent() {
    this.router.navigate(['/RobomindContent']);
  }

  RobomindCreate() {
    this.router.navigate(['/RobomindCreate']);
  }

  RobomindHome() {
    this.router.navigate(['/RobomindHome']);
  }

  // Review(id) {
  //   console.log(id);
  //   this.router.navigate(['/RobomindReview', id]);
  // }

  RoboticName() {
    console.log( 'ddddddddddd' );
    this.router.navigate(['/createRobotic']);
  }

  private getStudentList() {
    this.studentService.getStudentList().subscribe(students => {
      this.students = students;
    });
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      if (this.users !== undefined) {
        this.users = users;
      }
    });
  }

}
