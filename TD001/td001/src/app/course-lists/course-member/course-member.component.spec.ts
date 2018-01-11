import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMemberComponent } from './course-member.component';

describe('CourseMemberComponent', () => {
  let component: CourseMemberComponent;
  let fixture: ComponentFixture<CourseMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
