import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyNotesComponent } from './pedagogy-notes.component';

describe('PedagogyNotesComponent', () => {
  let component: PedagogyNotesComponent;
  let fixture: ComponentFixture<PedagogyNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
