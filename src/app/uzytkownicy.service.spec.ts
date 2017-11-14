import { TestBed, inject } from '@angular/core/testing';

import { UzytkownicyService } from './uzytkownicy.service';

describe('UzytkownicyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UzytkownicyService]
    });
  });

  it('should be created', inject([UzytkownicyService], (service: UzytkownicyService) => {
    expect(service).toBeTruthy();
  }));
});
