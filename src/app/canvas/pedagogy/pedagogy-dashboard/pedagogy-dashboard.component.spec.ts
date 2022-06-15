import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyDashboardComponent } from './pedagogy-dashboard.component';

describe('PedagogyDashboardComponent', () => {
  let component: PedagogyDashboardComponent;
  let fixture: ComponentFixture<PedagogyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
