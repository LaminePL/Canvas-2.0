import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyResitDetailsComponent } from './pedagogy-resit-details.component';

describe('PedagogyResitDetailsComponent', () => {
  let component: PedagogyResitDetailsComponent;
  let fixture: ComponentFixture<PedagogyResitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyResitDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyResitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
