import { TestBed } from '@angular/core/testing';

import { ClickToCallService } from './click-to-call.service';

describe('ClickToCallService', () => {
  let service: ClickToCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickToCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
