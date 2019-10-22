import { TestBed } from '@angular/core/testing';

import { FilmDetailService } from './film-detail.service';

describe('FilmDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmDetailService = TestBed.get(FilmDetailService);
    expect(service).toBeTruthy();
  });
});
