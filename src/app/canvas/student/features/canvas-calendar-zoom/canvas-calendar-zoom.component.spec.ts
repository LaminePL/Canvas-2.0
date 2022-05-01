import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasCalendarZoomComponent } from './canvas-calendar-zoom.component';

describe('CanvasCalendarZoomComponent', () => {
  let component: CanvasCalendarZoomComponent;
  let fixture: ComponentFixture<CanvasCalendarZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasCalendarZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasCalendarZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
