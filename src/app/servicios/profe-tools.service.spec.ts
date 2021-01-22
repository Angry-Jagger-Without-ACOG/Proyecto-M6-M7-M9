import { TestBed } from '@angular/core/testing';

import { ProfeToolsService } from './profe-tools.service';

describe('ProfeToolsService', () => {
  let service: ProfeToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfeToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
