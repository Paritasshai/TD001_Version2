import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCustomerComponent } from './course-customer.component';

describe('CourseCustomerComponent', () => {
  let component: CourseCustomerComponent;
  let fixture: ComponentFixture<CourseCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
