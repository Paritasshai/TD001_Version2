import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public static API_URL = 'http://localhost:8080/';
  // public static API_URL = 'http://103.76.180.120:8080/tamdai-service/';
  ImgLogo: string;

  onActivate() {
    window.scrollTo(0, 0);
  }

  constructor() {
    this.ImgLogo = '../../assets/images/logo.png';
  }

}
