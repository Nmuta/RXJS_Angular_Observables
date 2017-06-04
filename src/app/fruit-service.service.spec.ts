import { TestBed, inject } from '@angular/core/testing';

import { FruitServiceService } from './fruit-service.service';

describe('FruitServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FruitServiceService]
    });
  });

  it('should be created', inject([FruitServiceService], (service: FruitServiceService) => {
    expect(service).toBeTruthy();
  }));
});
