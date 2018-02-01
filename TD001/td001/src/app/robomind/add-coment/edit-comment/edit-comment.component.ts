import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../services/StudentService';
import {ActivatedRoute, Router} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';
import {AppComponent} from '../../../app.component';
import {User} from '../../../models/User';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  url = AppComponent.API_URL;
  stIdPath: any;
  contents: any = [];
  Content: any = {};
  ctId: any;
  ImgLogo: string;
  currentUser: User;
  RoboticLists: any = [];

  SelectedValue: string = null;
  rbName: any;
  show = false;
  groupSearch: any = [];

  deviceObjects = [
    {name: 'Select Group'},
    {name: 'EV3 Model Group 1'},
    {name: 'EV3 Model Group 2'},
    {name: 'EV3 Model Group 3'},
    {name: 'EV3 Model Group 4'},
    {name: 'EV3 Model Group 5'},
    {name: 'NXT Model Group 1'},
    {name: 'NXT Model Group 2'},
    {name: 'NXT Model Group 3'},
    {name: 'NXT Model Group 4'},
    {name: 'NXT Model Group 5'},
  ];

  selectedDeviceObj = this.deviceObjects[0];

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ImgLogo = '../../assets/images/logo_web.png';
  }

  onChangeObj(newObj) {
    this.show = true;
    this.selectedDeviceObj = newObj;
    console.log(this.selectedDeviceObj.name);
    this.studentService.getSearchGroup(this.selectedDeviceObj.name).subscribe(groupSearch => {
      this.groupSearch = groupSearch;
    });
    // ... do other stuff here ...
  }

  ngOnInit() {
    this.studentService.getRoboticLists().subscribe(RoboticLists => {
      this.RoboticLists = RoboticLists;
    });
    this.getContentId();
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

  private getContentId() {
    this.studentService.getContentId(this.route.snapshot.params['id']).subscribe(contents => {
      this.contents = contents;
    });
  }

  public uploaderImage: FileUploader = new FileUploader({url: AppComponent.API_URL + 'addContentImage/' + this.route.snapshot.params['id']});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  DeleteImage(id, stStudentId) {
    console.log(id);
    console.log(stStudentId);
    this.ctId = this.route.snapshot.params['id'];
    console.log(this.ctId);
    this.studentService.deleteImageContent(id, this.ctId).subscribe(
      data => {
        alert('Delete Image Success');
        location.reload();
      },
      error => {
        alert('Error');
      });
  }

  editContent(id) {
    console.log(id);
    console.log(this.contents.stStudentId);
    console.log(this.contents.stContent);
    console.log(this.contents.contentDate);

    // this.stIdPath = this.route.snapshot.params['id'];
    // this.contents.stStudentId = this.stIdPath;
    this.contents.rbGroup = this.selectedDeviceObj.name;
    this.contents.rbName = this.SelectedValue;
    console.log('rbGroup: ' + this.contents.rbGroup);
    console.log('rbName: ' + this.contents.rbName);

    this.studentService.editContent(id, this.contents.stStudentId, this.contents.stTime, this.contents.stContent, this.contents.stTeacher, this.contents.contentDate, this.contents.rbName, this.contents.rbGroup, this.contents)
      .subscribe(
        data => {
          // console.log("success");
          // this.alertService.success('Edit Successful', true);
          // location.reload();
          alert("Success");
        },
        error => {
          alert('Failed');
          // this.alertService.error('Edit Failed', true);
        });
  }

}
