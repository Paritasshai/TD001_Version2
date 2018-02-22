import {Component, OnInit} from '@angular/core';
import {User} from '../models/User';
import {OrderService} from '../services/OrderService';
import {Router} from '@angular/router';
import {UserService} from '../services/User.service';

@Component({
  selector: 'app-top-up-online-page',
  templateUrl: './top-up-online-page.component.html',
  styleUrls: ['./top-up-online-page.component.css'],
})
export class TopUpOnlinePageComponent implements OnInit {
  currentUser: User;
  value = '';
  Order: any = {};
  userId: any;
  values = '';
  users: User[] = [];

  deviceObjects = [{name: 100, description: 'ได้ 100 แต้ม'}, {name: 300, description: 'ได้ 350 แต้ม'}, {name: 500, description: 'ได้ 600 แต้ม'}];
  selectedDeviceObj = this.deviceObjects[1];

  onChangeObj(newObj) {
    console.log(newObj);
    this.selectedDeviceObj = newObj;
    // ... do other stuff here ...
  }

  constructor(private orderService: OrderService,
              private router: Router,
              private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = this.currentUser.id;
  }

  // public keyPress(event: any) {
  //   const pattern = /[0-9\+\-\ ]/;
  //   let inputChar = String.fromCharCode(event.charCode);
  //   // console.log(inputChar, e.charCode);
  //   if (!pattern.test(inputChar)) {
  //     // invalid character, prevent input
  //     event.preventDefault();
  //   }
  // }

  ngOnInit() {
    this.getUserList();
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  onEnter(value: string) {
    this.value = value;
  }


  onKey(value: string) {
    this.values = value;
  }

  Confirm() {

    // console.log(this.Order);
    // console.log(this.currentUser.id);
    this.Order.transAmount = this.selectedDeviceObj.name;
    console.log(this.Order.transAmount);
    this.orderService.createOrders(this.Order, this.userId)
      .subscribe(
        data => {
          setTimeout(function () {
          }, 1000);
          this.router.navigate(['/nonTopUp']);
          // alert('Success');
        },
        error => {
          alert('Error');
        });
  }
}
