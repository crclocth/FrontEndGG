import { TestBed } from '@angular/core/testing';

import { NodeProviderService } from './node-provider.service';

describe('NodeProviderService', () => {
  let service: NodeProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
