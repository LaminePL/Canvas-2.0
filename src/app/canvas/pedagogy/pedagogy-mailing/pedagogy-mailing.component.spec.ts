import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyMailingComponent } from './pedagogy-mailing.component';

describe('PedagogyMailingComponent', () => {
  let component: PedagogyMailingComponent;
  let fixture: ComponentFixture<PedagogyMailingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyMailingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyMailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
