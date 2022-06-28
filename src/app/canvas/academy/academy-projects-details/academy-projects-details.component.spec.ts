import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyProjectsDetailsComponent } from './academy-projects-details.component';

describe('AcademyProjectsDetailsComponent', () => {
  let component: AcademyProjectsDetailsComponent;
  let fixture: ComponentFixture<AcademyProjectsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyProjectsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyProjectsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
