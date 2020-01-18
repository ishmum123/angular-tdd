import {TestBed} from '@angular/core/testing';

import {ExternalApiService} from './external-api.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

describe('ExternalApiService', () => {
  class MockHttpClient {
    get(arg: string): Observable<string> {
      return of('Hello World!');
    }
  }

  beforeEach(() => TestBed.configureTestingModule({
    providers: [{provide: HttpClient, useValue: new MockHttpClient()}]
  }));

  it('should return result from client', () => {
    const service: ExternalApiService = TestBed.get(ExternalApiService);
    service.getGoogle('any text').subscribe(result => expect(result).toBe('Hello World!'));
  });
});
