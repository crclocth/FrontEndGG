import { TestBed } from '@angular/core/testing';

import { SectorProviderService } from './sector-provider.service';

describe('SectorProviderService', () => {
  let service: SectorProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectorProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
