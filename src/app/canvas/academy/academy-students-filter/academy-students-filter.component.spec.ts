import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyStudentsFilterComponent } from './academy-students-filter.component';

describe('AcademyStudentsFilterComponent', () => {
  let component: AcademyStudentsFilterComponent;
  let fixture: ComponentFixture<AcademyStudentsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyStudentsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyStudentsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
