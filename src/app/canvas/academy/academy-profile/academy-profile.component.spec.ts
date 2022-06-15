import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyProfileComponent } from './academy-profile.component';

describe('AcademyProfileComponent', () => {
  let component: AcademyProfileComponent;
  let fixture: ComponentFixture<AcademyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
