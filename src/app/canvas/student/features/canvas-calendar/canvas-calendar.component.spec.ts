import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasCalendarComponent } from './canvas-calendar.component';

describe('CanvasCalendarComponent', () => {
  let component: CanvasCalendarComponent;
  let fixture: ComponentFixture<CanvasCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
