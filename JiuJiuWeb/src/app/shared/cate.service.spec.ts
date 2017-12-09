import { TestBed, inject } from '@angular/core/testing';

import { CateService } from './cate.service';

describe('CateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CateService]
    });
  });

  it('should be created', inject([CateService], (service: CateService) => {
    expect(service).toBeTruthy();
  }));
});
