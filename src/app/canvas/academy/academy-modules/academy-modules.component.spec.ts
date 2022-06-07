import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyModulesComponent } from './academy-modules.component';

describe('AcademyModulesComponent', () => {
  let component: AcademyModulesComponent;
  let fixture: ComponentFixture<AcademyModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
