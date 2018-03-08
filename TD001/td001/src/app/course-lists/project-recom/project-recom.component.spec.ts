import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRecomComponent } from './project-recom.component';

describe('ProjectRecomComponent', () => {
  let component: ProjectRecomComponent;
  let fixture: ComponentFixture<ProjectRecomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRecomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
