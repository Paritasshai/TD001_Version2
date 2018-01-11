import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFavorComponent } from './course-favor.component';

describe('CourseFavorComponent', () => {
  let component: CourseFavorComponent;
  let fixture: ComponentFixture<CourseFavorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseFavorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
