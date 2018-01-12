import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDecisionComponent } from './course-decision.component';

describe('CourseDecisionComponent', () => {
  let component: CourseDecisionComponent;
  let fixture: ComponentFixture<CourseDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
