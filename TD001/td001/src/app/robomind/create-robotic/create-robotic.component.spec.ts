import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoboticComponent } from './create-robotic.component';

describe('CreateRoboticComponent', () => {
  let component: CreateRoboticComponent;
  let fixture: ComponentFixture<CreateRoboticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRoboticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoboticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
