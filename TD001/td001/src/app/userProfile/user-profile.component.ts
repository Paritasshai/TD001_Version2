import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/User.service';
import { BankStatement } from '../models/BankStatement';
import { BankStatementService } from '../services/BankStatementService';

@Component({
  selector: 'app-top-up-page',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  admin = 'admin';
  active = 'active';
  instructor = 'instructor';
  ImageUserProfile: string;
  ImageUserCover: string;
  bankStatements: BankStatement[] = [];
  bankStatement: any = {};
  userId: any;
  amount: any;
  result: any;
  paymentId: any;
  statementAmount: any;
  confirm = 'confirm';

  fifty = 50;
  hundred = 100;

  show1 = true;
  show2 = false;
  show3 = false;

  constructor(private userService: UserService,
    private bankStatementService: BankStatementService) {
    this.ImageUserProfile = '../../assets/images/003.jpg';
    this.ImageUserCover = '../../assets/images/001.jpg';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  public showU() {
    this.show1 = true;
    this.show2 = false;
    this.show3 = false;
  }

  public showO() {
    this.show1 = false;
    this.show2 = true;
    this.show3 = false;
  }

  public showC() {
    this.show1 = false;
    this.show2 = false;
    this.show3 = true;
  }

  ngOnInit() {
    if (this.currentUser !== null) {
      this.getUserList();
    }
    this.getBankStatementList();
  }

  private getUserList() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
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
    // console.log(id);
    // console.log(email);
    // console.log(statementAmount);
    // console.log(balance);
    // console.log(paymentId);

    this.result = parseFloat(statementAmount) + parseFloat(balance);
    // console.log(this.result);

    this.bankStatementService.confirmBankStatements(id, email, paymentId, statementAmount, bankOrderId, this.bankStatement, this.userId, this.result)
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
