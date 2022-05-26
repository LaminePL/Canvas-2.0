import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursZoomComponent } from './cours-zoom.component';

describe('CoursZoomComponent', () => {
  let component: CoursZoomComponent;
  let fixture: ComponentFixture<CoursZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
