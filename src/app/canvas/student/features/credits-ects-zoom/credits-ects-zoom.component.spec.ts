import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsEctsZoomComponent } from './credits-ects-zoom.component';

describe('CreditsEctsZoomComponent', () => {
  let component: CreditsEctsZoomComponent;
  let fixture: ComponentFixture<CreditsEctsZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsEctsZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsEctsZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
