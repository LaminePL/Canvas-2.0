import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyStudentDetailsComponent } from './pedagogy-student-details.component';

describe('PedagogyStudentDetailsComponent', () => {
  let component: PedagogyStudentDetailsComponent;
  let fixture: ComponentFixture<PedagogyStudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyStudentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
