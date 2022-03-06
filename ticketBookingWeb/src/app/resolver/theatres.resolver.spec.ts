import { TestBed } from '@angular/core/testing';

import { TheatresResolver } from './theatres.resolver';

describe('TheatresResolver', () => {
  let resolver: TheatresResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TheatresResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
