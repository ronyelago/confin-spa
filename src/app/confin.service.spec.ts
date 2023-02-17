import { TestBed } from '@angular/core/testing';

import { ConfinService } from './confin.service';

describe('ConfinService', () => {
  let service: ConfinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
