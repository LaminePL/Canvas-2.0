import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyProjectsDetailsComponent } from './pedagogy-projects-details.component';

describe('PedagogyProjectsDetailsComponent', () => {
  let component: PedagogyProjectsDetailsComponent;
  let fixture: ComponentFixture<PedagogyProjectsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyProjectsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyProjectsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
