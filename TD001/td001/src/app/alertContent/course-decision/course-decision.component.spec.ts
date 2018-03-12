import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecistionService } from './course-decision.component';

describe('CourseDecisionComponent', () => {
  let component: DecistionService;
  let fixture: ComponentFixture<DecistionService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecistionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecistionService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
