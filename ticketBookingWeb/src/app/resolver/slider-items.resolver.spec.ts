import { TestBed } from '@angular/core/testing';

import { SliderItemsResolver } from './slider-items.resolver';

describe('SliderItemsResolver', () => {
  let resolver: SliderItemsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SliderItemsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
