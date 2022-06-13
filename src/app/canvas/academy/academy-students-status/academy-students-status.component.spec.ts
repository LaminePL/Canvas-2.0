import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyStudentsStatusComponent } from './academy-students-status.component';

describe('AcademyStudentsStatusComponent', () => {
  let component: AcademyStudentsStatusComponent;
  let fixture: ComponentFixture<AcademyStudentsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyStudentsStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyStudentsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
