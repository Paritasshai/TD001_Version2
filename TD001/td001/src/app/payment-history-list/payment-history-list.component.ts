import {Component, OnInit} from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../services/User.service';
import {PaymentTransService} from '../services/PaymentTransService';

@Component({
  selector: 'app-payment-history-list',
  templateUrl: './payment-history-list.component.html',
  styleUrls: ['./payment-history-list.component.css']
})
export class PaymentHistoryListComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  paymentTrans: any;

  constructor(private userService: UserService,
              private paymentTransService: PaymentTransService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getUserList();
    this.getPaymentTransList();
    // this.paymentTrans.sort(function (id1, id2) {
    //   if (id1.id < id2.id) {
    //     return -1;
    //   } else if (id1.id > id2.id) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  private getPaymentTransList() {
    this.paymentTransService.getPaymentTrans().subscribe(paymentTrans => {
      this.paymentTrans = paymentTrans;
    });
  }

}
