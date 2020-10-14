import { TestBed } from '@angular/core/testing';

import { MyVolumesService } from './my-volumes.service';

describe('MyVolumesService', () => {
  let service: MyVolumesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyVolumesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
