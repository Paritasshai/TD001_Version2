import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../models/User";
import {StudentService} from "../../services/StudentService";

@Component({
  selector: 'app-create-robotic',
  templateUrl: './create-robotic.component.html',
  styleUrls: ['./create-robotic.component.css']
})
export class CreateRoboticComponent implements OnInit {

  currentUser: User;
  ImgLogo: string;
  Robotic: any = {};
  RoboticLists: any = [];
  name: any;

  deviceObjects = [
    {name: "Select Group"},
    {name: "EV3 Model Group 1"},
    {name: "EV3 Model Group 2"},
    {name: "EV3 Model Group 3"},
    {name: "EV3 Model Group 4"},
    {name: "EV3 Model Group 5"},
    {name: "NXT Model Group 1"},
    {name: "NXT Model Group 2"},
    {name: "NXT Model Group 3"},
    {name: "NXT Model Group 4"},
    {name: "NXT Model Group 5"},
  ];
  selectedDeviceObj = this.deviceObjects[0];

  onChangeObj(newObj) {
    console.log(newObj);
    this.selectedDeviceObj = newObj;
    // ... do other stuff here ...
  }

  constructor(private router: Router,
              private studentService: StudentService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ImgLogo = '../../assets/images/logo_web.png';
  }

  ngOnInit() {
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
    console.log("ddddddddddd");
    this.router.navigate(['/createRobotic']);
  }

  save(selectedValue) {
    console.log(selectedValue);
    console.log("OK!!");
    this.name = this.selectedDeviceObj.name;
    this.Robotic.nameGroup = this.name;
    console.log(this.name);
    this.studentService.roboticName(this.Robotic)
      .subscribe(
        data => {
          location.reload();
          //alert("success");
        },
        error => {
          alert("Failed!!");
        });
  }

  DeleteRobotic(id) {
    console.log("delete");
    console.log(id);
    this.studentService.roboticDelete(id)
      .subscribe(
        data => {

        },
        error => {

        });
  }


}
