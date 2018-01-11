import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  Img1: string;

  constructor() {
    this.Img1 = 'https://drive.google.com/file/d/0B-3_PQch_LsGS3ktdWRJSm1uVE0/view?usp=sharing';
    // console.clear();
  }

  ngOnInit() {
  }

}
