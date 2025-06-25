import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { authInterceptorFn } from './auth.interceptor';

describe('AuthInterceptor', () => {
  let service: HttpInterceptorFn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(authInterceptorFn);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
