import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';
import { OrderService } from '../services/OrderService';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-non-top-up',
  templateUrl: './non-top-up.component.html',
  styleUrls: ['./non-top-up.component.css'],
})

export class NonTopUpComponent implements OnInit {
  orderPayments: Order[] = [];
  currentUser: User;
  orderPaymentsId: Order[] = [];
  confirm = 'confirm';
  statusNonPaid = 'NonPaid';
  statusWaitPaid = 'waitPaid';

  constructor(private orderService: OrderService,
    private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getPaymentList();
  }

  private getPaymentList() {
    this.orderService.getPayments().subscribe(payments => {
      this.orderPayments = payments;
    });
  }

  Submit(id) {
    // this.orderService.getPaymentsById(id).subscribe(payments => {
    //   this.orderPaymentsId = payments;
    //   console.log(this.orderPaymentsId);
    // });

    this.router.navigate(['/topUpBank', id]);

  }

}
