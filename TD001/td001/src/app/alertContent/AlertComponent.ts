import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from './AlertService';
import { User } from '../models/User';
import { UserService } from '../services/User.service';

@Component({
  // moduleId: module.id,
  selector: 'alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message: any;
  currentUser: User;
  users: any = [];

  constructor(private alertService: AlertService,
    private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
    this.getUserList();
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

}
