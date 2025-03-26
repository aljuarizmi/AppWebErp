import { TestBed } from '@angular/core/testing';

import { CustomDateAdapterService } from './customdateadapter.service';

describe('CustomDateAdapterService', () => {
  let service: CustomDateAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomDateAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
