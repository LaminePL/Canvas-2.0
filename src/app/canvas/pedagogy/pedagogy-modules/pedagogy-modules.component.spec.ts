import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyModulesComponent } from './pedagogy-modules.component';

describe('PedagogyModulesComponent', () => {
  let component: PedagogyModulesComponent;
  let fixture: ComponentFixture<PedagogyModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
