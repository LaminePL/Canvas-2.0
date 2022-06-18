import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratifDocZoomComponent } from './administratif-doc-zoom.component';

describe('AdministratifDocZoomComponent', () => {
  let component: AdministratifDocZoomComponent;
  let fixture: ComponentFixture<AdministratifDocZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratifDocZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratifDocZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
