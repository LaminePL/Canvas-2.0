import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResitsComponent } from './resits.component';

describe('ResitsComponent', () => {
  let component: ResitsComponent;
  let fixture: ComponentFixture<ResitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
