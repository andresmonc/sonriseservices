import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTeamComponent } from './container-team.component';

describe('ContainerTeamComponent', () => {
  let component: ContainerTeamComponent;
  let fixture: ComponentFixture<ContainerTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
