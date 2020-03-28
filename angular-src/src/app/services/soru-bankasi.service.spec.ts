import { TestBed } from '@angular/core/testing';

import { SoruBankasiService } from './soru-bankasi.service';

describe('SoruBankasiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoruBankasiService = TestBed.get(SoruBankasiService);
    expect(service).toBeTruthy();
  });
});
