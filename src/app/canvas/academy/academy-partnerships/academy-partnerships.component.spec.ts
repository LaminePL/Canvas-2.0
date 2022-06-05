import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyPartnershipsComponent } from './academy-partnerships.component';

describe('AcademyPartnershipsComponent', () => {
  let component: AcademyPartnershipsComponent;
  let fixture: ComponentFixture<AcademyPartnershipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyPartnershipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyPartnershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
