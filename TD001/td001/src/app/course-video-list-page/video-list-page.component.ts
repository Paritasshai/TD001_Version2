import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {FileUploader} from 'ng2-file-upload';
import {CourseService} from '../services/CourseService';
import {AlertService} from '../alertContent/AlertService';
import {Router} from '@angular/router';
import {User} from '../models/User';
import {AppComponent} from '../app.component';

const URL = AppComponent.API_URL;

@Component({
  selector: 'app-video-list-page',
  templateUrl: './video-list-page.component.html',
  styleUrls: ['./video-list-page.component.css']
})
export class VideoListPageComponent implements OnInit {
  Course: any = {};
  currentUser: User;
  TypeItems = 'new hot recommend'.split(' ');
  CatagoriesItems = 'Lego Household Toy Garden IoT'.split(' ');
  model = {options: ''};
  models = {options: ''};

  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(public http: Http,
              private courseService: CourseService,
              private alertService: AlertService,
              private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.clear();
  }

  ngOnInit() {
  }

  public keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    // console.log(inputChar, e.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  upLoad(id) {
    console.log(id);
    this.Course.courseType = this.model.options;
    this.Course.catagory = this.models.options;
    console.log(this.Course.courseType);
    console.log(this.Course.catagory);
    this.courseService.createCourse(id, this.Course)
      .subscribe(
        data => {
          this.alertService.success('Upload Successful', true);
          this.router.navigate(['/EditCourse']);
        },
        error => {
          this.alertService.error('Upload Failed', true);
        });
  }

}
