import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyNotesFiltersComponent } from './pedagogy-notes-filters.component';

describe('PedagogyNotesFiltersComponent', () => {
  let component: PedagogyNotesFiltersComponent;
  let fixture: ComponentFixture<PedagogyNotesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyNotesFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyNotesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
