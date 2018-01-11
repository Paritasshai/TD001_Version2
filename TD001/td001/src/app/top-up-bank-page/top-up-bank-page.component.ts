import {Component, Input, OnInit} from '@angular/core';
import {BankStatementService} from '../services/BankStatementService';
import {User} from '../models/User';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../services/OrderService';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-top-up-bank-page',
  templateUrl: './top-up-bank-page.component.html',
  styleUrls: ['./top-up-bank-page.component.css'],
})

export class TopUpBankPageComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
  };

  // Initialized to specific date (09.10.2018).
  // private modelDate: Object = { date: { year: 2018, month: 10, day: 9 } };

  bankStatement: any = {};
  currentUser: User;
  userId: any;
  public orderDetail;
  orderPaymentsIds: any = {};
  radioItems = 'KBANK KTB BBK SCB'.split(' ');
  model = {options: ''};
  modelDate: any;

  get debug() {
    return JSON.stringify(this.model);
  }

  constructor(private bankStatementService: BankStatementService,
              private router: Router,
              private orderService: OrderService,
              private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = this.currentUser.id;
    console.clear();
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.orderDetail = id;
    // this.getPaymentList();
    this.getPaymentId(this.orderDetail);
  }

  // private getPaymentList() {
  //   this.orderService.getPayments().subscribe(payments => {
  //     this.orderPayments = payments;
  //   });
  // }

  private getPaymentId(orderDetail) {
    this.orderService.getPaymentsById(orderDetail).subscribe(payments => {
      this.orderPaymentsIds = payments;
      // console.log(this.orderPaymentsIds);
    });
  }

  Submit() {

    // console.log(this.modelDate.formatted);
    this.bankStatement.bankName = this.model.options;
    this.bankStatement.bankOrderId = this.orderPaymentsIds.id;
    this.bankStatement.statementAmount = this.orderPaymentsIds.transAmount;
    this.bankStatement.paymentId = this.orderPaymentsIds.transRef;
    this.bankStatement.statementDate = this.modelDate.formatted;
    // console.log(this.bankStatement.statementAmount);
    // console.log(this.bankStatement.statementTime);


    this.bankStatementService.createBankStatements(this.bankStatement, this.userId)
      .subscribe(
        data => {
          setTimeout(function () {
            location.reload();
          }, 2000);
          this.router.navigate(['/userProfile']);
          alert('Success');
        },
        error => {
          alert('Error');
        });
  }

}
