import { TestBed } from '@angular/core/testing';

import { CanvasResolver } from './canvas.resolver';

describe('CanvasResolver', () => {
  let resolver: CanvasResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CanvasResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
