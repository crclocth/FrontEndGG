import { TestBed } from '@angular/core/testing';

import { SensorProviderService } from './sensor-provider.service';

describe('SensorProviderService', () => {
  let service: SensorProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
