import { TestBed } from '@angular/core/testing';

import { IconLibraryService } from './icon-library.service';

describe('IconLibraryService', () => {
  let service: IconLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
