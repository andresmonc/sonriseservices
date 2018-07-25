import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerheaderComponent } from './bannerheader.component';

describe('BannerheaderComponent', () => {
  let component: BannerheaderComponent;
  let fixture: ComponentFixture<BannerheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
