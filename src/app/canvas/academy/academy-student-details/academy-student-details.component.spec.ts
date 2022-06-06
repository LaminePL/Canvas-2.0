import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyStudentDetailsComponent } from './academy-student-details.component';

describe('AcademyStudentDetailsComponent', () => {
  let component: AcademyStudentDetailsComponent;
  let fixture: ComponentFixture<AcademyStudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyStudentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
