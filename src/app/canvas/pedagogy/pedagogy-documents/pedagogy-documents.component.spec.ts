import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyDocumentsComponent } from './pedagogy-documents.component';

describe('PedagogyDocumentsComponent', () => {
  let component: PedagogyDocumentsComponent;
  let fixture: ComponentFixture<PedagogyDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
