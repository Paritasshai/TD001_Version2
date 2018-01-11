import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../services/StudentService';
import {User} from '../../models/User';

@Component({
  selector: 'app-add-coment',
  templateUrl: './add-coment.component.html',
  styleUrls: ['./add-coment.component.css']
})
export class AddComentComponent implements OnInit {

  Content: any = {};
  stIdPath: any;
  @ViewChild('fileInput') fileInput;
  contents: any[] = [];
  ImgLogo: string;
  currentUser: User;
  student: any = [];
  values = '';
  RoboticLists: any = [];

  SelectedValue: string = null;
  rbName: any;

  name: any;
  show = false;
  groupSearch: any = [];
  showName = false;

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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentService) {
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
    this.getContentList();
    this.studentService.getRoboticLists().subscribe(RoboticLists => {
      this.RoboticLists = RoboticLists;
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

  RoboticName() {
    console.log('ddddddddddd');
    this.router.navigate(['/createRobotic']);
  }

  addContent() {

    this.stIdPath = this.Content.stStudentId;
    console.log(this.stIdPath);

    this.Content.rbGroup = this.selectedDeviceObj.name;
    this.Content.rbName = this.SelectedValue;
    console.log('rbGroup: ' + this.Content.rbGroup);
    console.log('rbName: ' + this.Content.rbName);
    console.log(this.Content);

    this.studentService.addContent(this.stIdPath, this.Content)
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          alert('success');
          location.reload();
        },
        error => {
          // this.alertService.error('This email already exists', true);
          alert('create Failed!!');
        });
  }

  private getContentList() {
    this.studentService.getContentList().subscribe(contents => {
      this.contents = contents;
    });
  }

  edit(id) {
    console.log(id);
    console.log('edit');
    this.router.navigate(['/editComment', id]);
  }

  delete(id, stStudentId) {
    console.log(id);
    console.log(stStudentId);
    this.studentService.deleteContent(id, stStudentId)
      .subscribe(data => {
          location.reload();
        },
        error => {

        });
  }

  onKey(event: any) { // without type info
    this.values = event.target.value;
    console.log(this.values);
    this.studentService.getStudentStId(this.values).subscribe(student => {
      this.student = student;
      this.showName = true;
    });
  }

}
