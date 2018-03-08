import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/CourseService';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { UserService } from '../../services/User.service';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css']
})
export class HeaderSearchComponent implements OnInit {
  url = AppComponent.API_URL;
  courseSearch: any = [];
  textPublic = 'true';
  textTrue = 'true';
  textNull = 'null';
  empty = 'null';
  show = false;


  constructor(private courseService: CourseService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getCourseList();
    if (this.courseSearch !== []) {
      this.show = false;
    }else {
      this.show = true;
    }
  }

  private getCourseList() {
    this.courseService.getSearchByName(this.route.snapshot.params['id'], this.textPublic).subscribe(response => {
      this.courseSearch = response;
    });
  }

  click(id) {
    setTimeout(function () {
      location.reload();
    }, 1000);
    this.router.navigate(['/CourseLists', id]);
  }

}
