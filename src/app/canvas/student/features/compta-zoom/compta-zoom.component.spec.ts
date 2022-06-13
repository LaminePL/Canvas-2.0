import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptaZoomComponent } from './compta-zoom.component';

describe('ComptaZoomComponent', () => {
  let component: ComptaZoomComponent;
  let fixture: ComponentFixture<ComptaZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptaZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptaZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
