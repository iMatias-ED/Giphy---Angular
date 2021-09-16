import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGifSectionComponent } from './home-gif-section.component';

describe('HomeGifSectionComponent', () => {
  let component: HomeGifSectionComponent;
  let fixture: ComponentFixture<HomeGifSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGifSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGifSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
