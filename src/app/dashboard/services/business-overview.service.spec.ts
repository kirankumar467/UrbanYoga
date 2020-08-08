import { TestBed } from '@angular/core/testing';

import { BusinessOverviewService } from './business-overview.service';

describe('BusinessOverviewService', () => {
  let service: BusinessOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
