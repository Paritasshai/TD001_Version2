import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ImgLogo: string;
  public static API_URL = 'http://localhost:8080/';
  //public static API_URL = 'http://103.76.180.120:8080/tamdai-service/';

  constructor() {
    this.ImgLogo = '../../assets/images/logo.png';
  }

}
