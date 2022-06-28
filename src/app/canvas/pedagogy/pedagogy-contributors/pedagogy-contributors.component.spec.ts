import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogyContributorsComponent } from './pedagogy-contributors.component';

describe('PedagogyContributorsComponent', () => {
  let component: PedagogyContributorsComponent;
  let fixture: ComponentFixture<PedagogyContributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogyContributorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogyContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
