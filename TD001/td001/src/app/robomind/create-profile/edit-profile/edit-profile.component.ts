import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../../services/StudentService";
import {FileUploader} from "ng2-file-upload";
import {AppComponent} from "../../../app.component";
import {User} from "../../../models/User";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  url = AppComponent.API_URL;
  students: any = [];
  Student: any = {};

  public id: any;
  public stId: any;
  public stNickname: any;
  public stFirstname: any;
  public stLastname: any;
  public stSchool: any;
  public stDate: any;
  public stAge: any;
  public stParent: any;
  public stEmail: any;
  public stMobile: any;
  public stStart: any;

  ImgLogo: string;
  currentUser: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ImgLogo = '../../assets/images/logo_web.png';
  }

  ngOnInit() {
    this.getStudentId();
  }

  RobomindContent() {
    this.router.navigate(['/RobomindContent']);
  }

  RobomindHome() {
    this.router.navigate(['/RobomindHome']);
  }

  RobomindCreate() {
    this.router.navigate(['/RobomindCreate']);
  }

  RoboticName() {
    console.log("ddddddddddd");
    this.router.navigate(['/createRobotic']);
  }

  private getStudentId() {
    this.studentService.getStudentId(this.route.snapshot.params['id']).subscribe(students => {
      this.students = students;
    });
  }

  public uploaderImage: FileUploader = new FileUploader({url: AppComponent.API_URL + 'addStudentImage/' + this.route.snapshot.params['id']});
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  editProfile(id) {
    console.log(id);
    this.stId = this.students.stId;
    console.log(this.stId);
    this.stNickname = this.students.stNickname;
    console.log(this.stNickname);
    this.stFirstname = this.students.stFirstname;
    console.log(this.stFirstname);
    this.stLastname = this.students.stLastname;
    console.log(this.stLastname);
    this.stSchool = this.students.stSchool;
    console.log(this.stSchool);
    this.stDate = this.students.stDate;
    console.log(this.stDate);
    this.stAge = this.students.stAge;
    console.log(this.stAge);
    this.stParent = this.students.stParent;
    console.log(this.stParent);
    this.stEmail = this.students.stEmail;
    console.log(this.stEmail);
    this.stMobile = this.students.stMobile;
    console.log(this.stMobile);
    this.stStart = this.students.stStart;
    console.log(this.stStart);

    this.studentService.editStudentProfile(id, this.stId, this.stNickname, this.stFirstname, this.stLastname, this.stSchool,
      this.stDate, this.stAge, this.stParent, this.stEmail, this.stMobile, this.stStart, this.Student)
      .subscribe(
        data => {
          console.log("success");
          // location.reload();
          alert("Success");
          // this.alertService.success('Edit Successful', true);
        },
        error => {
          alert("Failed");
          // this.alertService.error('Edit Failed', true);
        });
  }

  public DeleteImage(id, stId) {
    console.log(id);
    console.log(stId);
    this.studentService.deleteImage(id, stId).subscribe(
      data => {
        //alert("Delete Image Success");
        location.reload();
      },
      error => {
        alert("Error")
      });
  }


}
