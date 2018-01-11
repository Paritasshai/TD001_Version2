import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../services/CourseService';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-add-video-item',
  templateUrl: './add-video-item.component.html',
  styleUrls: ['./add-video-item.component.css']
})

export class AddVideoItemComponent implements OnInit {

  VideoItem: any = {};
  videoItems: any = {};
  Course: any = {};
  course: any = {};
  name: any;
  description: any;
  preview: 'canPreview';
  canPreview: any;
  image = 'image';
  video = 'video';
  text = 'text';
  textTrue = 'true';
  textUndefined = 'undefined';
  courses: any = [];
  courseId: any;
  videoPath: any;
  courseText: any;
  videoTime: any;
  orderItem: any;


  constructor(private route: ActivatedRoute,
              private courseService: CourseService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.getVideoItemId();
  }

  updateItem(id) {
    // console.log(id);
    // console.log(this.VideoItem);
    this.name = this.Course.name;
    this.description = this.Course.description;
    this.canPreview = this.VideoItem.canPreview;
    this.videoPath = this.Course.videoPath;
    this.courseText = this.Course.courseText;
    this.videoTime = this.Course.videoTime;
    this.orderItem = this.Course.orderItem;
    // console.log(this.courseText);
    this.courseService.updateItemDetails(id, this.name, this.description, this.canPreview, this.course, this.videoPath, this.courseText, this.videoTime, this.orderItem).subscribe(
      data => {
        alert('Update Success');
        // location.reload();
      },
      error => {
        alert('Update Failed');
      });
  }

  public uploader: FileUploader = new FileUploader({url: AppComponent.API_URL + 'add/videoItem/' + '?id=' + this.route.snapshot.params['id']});
  public uploaderImage: FileUploader = new FileUploader({url: AppComponent.API_URL + 'add/imageItem/' + '?id=' + this.route.snapshot.params['id']});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  private getVideoItemId() {
    this.courseService.getCourseItemtemById(this.route.snapshot.params['id']).subscribe(Course => {
      this.Course = Course;
    });
  }

  submitText(textItem) {
    console.log(textItem);
  }
}
