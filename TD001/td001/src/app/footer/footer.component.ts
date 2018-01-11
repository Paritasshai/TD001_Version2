import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  ImgNIA: string;
  ImgPOINTZ: string;
  ImgTECH: string;

  constructor() {
    this.ImgNIA = '../../assets/images/NIA.png';
    this.ImgPOINTZ = '../../assets/images/pointznet.png';
    this.ImgTECH = '../../assets/images/TechDIY.png';
  }

  ngOnInit() {
  }

}
