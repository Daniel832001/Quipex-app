import { TestBed } from '@angular/core/testing';

import { CompanyRecordAppService } from './company-record-app.service';

describe('CompanyRecordAppService', () => {
  let service: CompanyRecordAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyRecordAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
