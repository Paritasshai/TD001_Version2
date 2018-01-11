import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewProfileComponent } from './review-profile.component';

describe('ReviewProfileComponent', () => {
  let component: ReviewProfileComponent;
  let fixture: ComponentFixture<ReviewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
