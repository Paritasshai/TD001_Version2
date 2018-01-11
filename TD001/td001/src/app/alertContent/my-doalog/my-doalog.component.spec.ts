import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDoalogComponent } from './my-doalog.component';

describe('MyDoalogComponent', () => {
  let component: MyDoalogComponent;
  let fixture: ComponentFixture<MyDoalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDoalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDoalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
