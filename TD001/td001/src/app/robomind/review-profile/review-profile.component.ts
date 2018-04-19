import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {StudentService} from '../../../app/services/StudentService';
import {AppComponent} from '../../app.component';
import {User} from '../../models/User';

@Component({
  selector: 'app-review-profile',
  templateUrl: './review-profile.component.html',
  styleUrls: ['./review-profile.component.css']
})
export class ReviewProfileComponent implements OnInit {

  url = AppComponent.API_URL;
  students: any = [];
  roboImageSet: any;
  contents: any[] = [];
  suggestion: any = {};
  content: any = [];
  divComment = true;
  ImgLogo: string;
  currentUser: User;
  loading = false;
  user = 'user';
  admin = 'admin';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ImgLogo = '../../assets/images/logo_web.png';
  }

  ngOnInit() {
    this.getStudentId();
    this.getContentList();
    this.divComment = false;
  }

  logOutRobo() {
    this.loading = true;
    console.log('Log Out');
    localStorage.removeItem('currentUser');
    location.reload();
    this.router.navigate(['/RobomindHome']);
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

  RoboticName() {
    console.log('ddddddddddd');
    this.router.navigate(['/createRobotic']);
  }

  private getStudentId() {
    this.studentService.getStudentId(this.route.snapshot.params['id']).subscribe(students => {
      this.students = students;
    });
  }

  private getContentList() {
    this.studentService.getContentList().subscribe(contents => {
      this.contents = contents;
    });
  }

  show(id) {
    this.divComment = true;
    console.log(id);
    this.studentService.getContentId(id).subscribe(content => {
      this.content = content;
      console.log(this.content);
    });
    // this.router.navigate(['/Carousel', id]);
  }

  Suggestion() {
    console.log(this.suggestion.comment);
    console.log(this.students.id);
    this.studentService.createComment(this.suggestion, this.students.id)
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          // alert('create success');
          location.reload();
        },
        error => {
          // this.alertService.error('This email already exists', true);
          alert('create Failed!!');
        });
  }

}
