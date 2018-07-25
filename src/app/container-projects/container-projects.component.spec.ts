import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProjectsComponent } from './container-projects.component';

describe('ContainerProjectsComponent', () => {
  let component: ContainerProjectsComponent;
  let fixture: ComponentFixture<ContainerProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
