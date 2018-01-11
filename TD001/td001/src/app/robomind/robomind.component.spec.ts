import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobomindComponent } from './robomind.component';

describe('RobomindComponent', () => {
  let component: RobomindComponent;
  let fixture: ComponentFixture<RobomindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobomindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobomindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
