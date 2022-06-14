import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyResitDetailsComponent } from './academy-resit-details.component';

describe('AcademyResitDetailsComponent', () => {
  let component: AcademyResitDetailsComponent;
  let fixture: ComponentFixture<AcademyResitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyResitDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyResitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
