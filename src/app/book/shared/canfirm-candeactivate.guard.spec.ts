import { TestBed, async, inject } from '@angular/core/testing';

import { CanfirmCandeactivateGuard } from './canfirm-candeactivate.guard';

describe('CanfirmCandeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanfirmCandeactivateGuard]
    });
  });

  it('should ...', inject([CanfirmCandeactivateGuard], (guard: CanfirmCandeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
