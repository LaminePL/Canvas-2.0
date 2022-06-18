import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratifDocComponent } from './administratif-doc.component';

describe('AdministratifDocComponent', () => {
  let component: AdministratifDocComponent;
  let fixture: ComponentFixture<AdministratifDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratifDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratifDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
