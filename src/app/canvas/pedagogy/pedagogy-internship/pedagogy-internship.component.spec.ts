import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyInternshipComponent } from './pedagogy-internship.component';

describe('PedagogyInternshipComponent', () => {
  let component: PedagogyInternshipComponent;
  let fixture: ComponentFixture<PedagogyInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyInternshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
