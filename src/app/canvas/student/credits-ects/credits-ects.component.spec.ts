import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsECTSComponent } from './credits-ects.component';

describe('CreditsECTSComponent', () => {
  let component: CreditsECTSComponent;
  let fixture: ComponentFixture<CreditsECTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsECTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsECTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
