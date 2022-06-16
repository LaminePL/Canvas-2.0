import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipZoomComponent } from './internship-zoom.component';

describe('InternshipZoomComponent', () => {
  let component: InternshipZoomComponent;
  let fixture: ComponentFixture<InternshipZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
