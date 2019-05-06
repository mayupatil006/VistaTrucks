import { TestBed } from '@angular/core/testing';

import { AtlService } from './atl.service';

describe('AtlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtlService = TestBed.get(AtlService);
    expect(service).toBeTruthy();
  });
});
