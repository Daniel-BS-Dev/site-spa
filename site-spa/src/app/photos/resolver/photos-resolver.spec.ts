/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhotosResolver } from './photos-resolver';

describe('Service: PhotosResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotosResolver]
    });
  });

  it('should ...', inject([PhotosResolver], (service: PhotosResolver) => {
    expect(service).toBeTruthy();
  }));
});
