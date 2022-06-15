import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyStudentsComponent } from './pedagogy-students.component';

describe('PedagogyStudentsComponent', () => {
  let component: PedagogyStudentsComponent;
  let fixture: ComponentFixture<PedagogyStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
