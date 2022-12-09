import { TestBed } from '@angular/core/testing';

import { RegistrtionService } from './registrtion.service';

describe('RegistrtionService', () => {
  let service: RegistrtionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrtionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
