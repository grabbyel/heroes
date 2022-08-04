import { TestBed } from '@angular/core/testing';

import { MuseosDataService } from './museos-data.service';

describe('MuseosDataService', () => {
  let service: MuseosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuseosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
