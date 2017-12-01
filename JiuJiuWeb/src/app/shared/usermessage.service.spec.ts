import { TestBed, inject } from '@angular/core/testing';

import { UsermessageService } from './usermessage.service';

describe('UsermessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsermessageService]
    });
  });

  it('should be created', inject([UsermessageService], (service: UsermessageService) => {
    expect(service).toBeTruthy();
  }));
});
