import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyInternshipZoomComponent } from './pedagogy-internship-zoom.component';

describe('PedagogyInternshipZoomComponent', () => {
  let component: PedagogyInternshipZoomComponent;
  let fixture: ComponentFixture<PedagogyInternshipZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyInternshipZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyInternshipZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
