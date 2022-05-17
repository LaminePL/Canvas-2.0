import { TestBed } from '@angular/core/testing';

import { SutdentService } from './sutdent.service';

describe('SutdentService', () => {
  let service: SutdentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SutdentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
