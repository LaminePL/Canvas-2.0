import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersBoardComponent } from './teachers-board.component';

describe('TeachersComponent', () => {
  let component: TeachersBoardComponent;
  let fixture: ComponentFixture<TeachersBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
