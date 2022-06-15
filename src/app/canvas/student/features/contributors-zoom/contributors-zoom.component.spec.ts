import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsZoomComponent } from './contributors-zoom.component';

describe('ContributorsZoomComponent', () => {
  let component: ContributorsZoomComponent;
  let fixture: ComponentFixture<ContributorsZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorsZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
