import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiService {

  constructor(private client: HttpClient) {
  }

  getGoogle(query: string): Observable<string> {
    return this.client.get<string>(`https://www.google.com/search?q=${query}`);
  }
}
