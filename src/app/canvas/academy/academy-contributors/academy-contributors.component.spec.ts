import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyContributorsComponent } from './academy-contributors.component';

describe('AcademyContributorsComponent', () => {
  let component: AcademyContributorsComponent;
  let fixture: ComponentFixture<AcademyContributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyContributorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
