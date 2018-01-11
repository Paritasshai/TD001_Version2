import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInsComponent } from './course-ins.component';

describe('CourseInsComponent', () => {
  let component: CourseInsComponent;
  let fixture: ComponentFixture<CourseInsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
