import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResitsZoomComponent } from './resits-zoom.component';

describe('ResitsZoomComponent', () => {
  let component: ResitsZoomComponent;
  let fixture: ComponentFixture<ResitsZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResitsZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResitsZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
