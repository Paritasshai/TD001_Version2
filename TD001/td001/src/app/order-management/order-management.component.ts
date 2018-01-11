import {Component, OnInit} from '@angular/core';
import {OrderService} from '../services/OrderService';
import {Order} from '../models/Order';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {
  orderPayments: Order[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    if (this.orderPayments !== undefined) {
      this.getPaymentList();
    }
  }

  private getPaymentList() {
    this.orderService.getPayments().subscribe(payments => {
      this.orderPayments = payments;
    });
  }

}
