import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/StudentService';
import { Student } from '../../../app/models/Student';
import { User } from '../../models/User';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  Student: any = {};
  students: Student[] = [];
  @ViewChild('fileInput') fileInput;
  ImgLogo: string;
  currentUser: User;
  today: any = Date.now();
  loading = false;
  user = 'user';
  admin = 'admin';

  constructor(private router: Router,
    private studentService: StudentService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ImgLogo = '../../assets/images/logo_web.png';
  }

  ngOnInit() {
    this.getStudentList();
  }

  RobomindContent(id) {
    console.log('Student ID :' + id);
    this.router.navigate(['/RobomindContent', id]);
  }

  RobomindHome() {
    this.router.navigate(['/RobomindHome']);
  }

  RobomindCreate() {
    this.router.navigate(['/RobomindCreate']);
  }

  RoboticName() {
    console.log('ddddddddddd');
    this.router.navigate(['/createRobotic']);
  }

  createProfile() {
    console.log(this.Student);
    // console.log(this.Student.stDate);
    // console.log(this.today.format('DD-MM-YYYY'));

    this.studentService.createProfile(this.Student)
      .subscribe(
        data => {
          alert('create success');
          location.reload();
        },
        error => {
          alert('create Failed!!');
        });
  }

  private getStudentList() {
    this.studentService.getStudentList().subscribe(students => {
      this.students = students;
    });
  }

  logOutRobo() {
    this.loading = true;
    console.log('Log Out');
    localStorage.removeItem('currentUser');
    location.reload();
    this.router.navigate(['/RobomindHome']);
  }

  edit(id) {
    console.log(id);
    console.log('edit');
    this.router.navigate(['/editProfile', id]);
    // this.studentService.getStudentId(id).subscribe(studentsId => {
    //   this.studentsId = studentsId;
    // });
  }

  delete(id) {
    console.log('Student ID:' + id);
    this.studentService.deleteProfile(id).subscribe(
      data => {
        // alert('Delete Image Success');
        location.reload();
      },
      error => {
        alert('Error');
      });
  }

}
