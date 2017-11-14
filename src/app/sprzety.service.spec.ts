import { TestBed, inject } from '@angular/core/testing';

import { SprzetyService } from './sprzety.service';

describe('SprzetyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SprzetyService]
    });
  });

  it('should be created', inject([SprzetyService], (service: SprzetyService) => {
    expect(service).toBeTruthy();
  }));
});
