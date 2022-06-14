import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyDocumentsComponent } from './academy-documents.component';

describe('AcademyDocumentsComponent', () => {
  let component: AcademyDocumentsComponent;
  let fixture: ComponentFixture<AcademyDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
