import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComentComponent } from './add-coment.component';

describe('AddComentComponent', () => {
  let component: AddComentComponent;
  let fixture: ComponentFixture<AddComentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
