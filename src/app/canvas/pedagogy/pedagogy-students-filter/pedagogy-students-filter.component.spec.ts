import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyStudentsFilterComponent } from './pedagogy-students-filter.component';

describe('PedagogyStudentsFilterComponent', () => {
  let component: PedagogyStudentsFilterComponent;
  let fixture: ComponentFixture<PedagogyStudentsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyStudentsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyStudentsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
