import { TestBed } from '@angular/core/testing';

import { SMService } from './sm.service';

describe('SMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SMService = TestBed.get(SMService);
    expect(service).toBeTruthy();
  });
});
