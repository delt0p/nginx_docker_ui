import { TestBed } from '@angular/core/testing';

import { InitialServiceService } from './initial-service.service';

describe('InitialServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitialServiceService = TestBed.get(InitialServiceService);
    expect(service).toBeTruthy();
  });
});
