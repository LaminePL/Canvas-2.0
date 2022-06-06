import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyStudentsComponent } from './academy-students.component';

describe('AcademyStudentsComponent', () => {
  let component: AcademyStudentsComponent;
  let fixture: ComponentFixture<AcademyStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
