import {Component, OnInit} from '@angular/core';
import {BankStatement} from '../models/BankStatement';
import {BankStatementService} from '../services/BankStatementService';

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.css'],
})
export class ManagementPageComponent implements OnInit {
  bankStatements: BankStatement[] = [];
  bankStatement: any = {};
  userId: any;
  amount: any;
  result: any;
  paymentId: any;
  statementAmount: any;
  confirm = 'confirm';

  constructor(private bankStatementService: BankStatementService) {
  }

  ngOnInit() {
    this.getBankStatementList();
  }

  private getBankStatementList() {
    this.bankStatementService.getBankStatements().subscribe(bankStatements => {
      this.bankStatements = bankStatements;
      if (bankStatements[0] !== undefined) {
        this.amount = bankStatements[0].statementAmount;
        this.userId = bankStatements[0].id;
      }
    });
  }

  ConfirmPayment(id, email, paymentId, statementAmount, balance, bankOrderId) {
    console.log(id);
    console.log(email);
    console.log(statementAmount);
    console.log('balance: ' + balance);
    console.log(paymentId);

    // this.result = parseFloat(statementAmount) + parseFloat(balance);
    // console.log("result: " + this.result);

    this.bankStatementService.confirmBankStatements(id, email, paymentId, statementAmount, bankOrderId, this.bankStatement, this.userId, balance)
      .subscribe(
        data => {
          alert('Success');
          location.reload();
        },
        error => {
          alert('Error');
        });
  }

}
