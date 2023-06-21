import { TestBed } from '@angular/core/testing';

import { UserDeatailsService } from './user-deatails.service';

describe('UserDeatailsService', () => {
  let service: UserDeatailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDeatailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
