import { TestBed } from '@angular/core/testing';

import { DownloadUtentiService } from './download-utenti.service';

describe('DownloadUtentiService', () => {
  let service: DownloadUtentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadUtentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
