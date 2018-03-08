import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(public http: Http) {
  }

  ngOnInit() {
    window.location.href = 'http://www.tamdai.net/store/index.php/?SID=t82hf5mrb5qnkissr57iata4q1';
   // return this.http.get('http://www.tamdai.net/store/index.php/?SID=t82hf5mrb5qnkissr57iata4q1');
  }

}
