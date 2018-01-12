import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomModalContextComponent } from './custom-modal-context.component';

describe('CustomModalContextComponent', () => {
  let component: CustomModalContextComponent;
  let fixture: ComponentFixture<CustomModalContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomModalContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomModalContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
