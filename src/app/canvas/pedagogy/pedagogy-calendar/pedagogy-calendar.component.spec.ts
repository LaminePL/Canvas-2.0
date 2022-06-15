import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyCalendarComponent } from './pedagogy-calendar.component';

describe('PedagogyCalendarComponent', () => {
  let component: PedagogyCalendarComponent;
  let fixture: ComponentFixture<PedagogyCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
