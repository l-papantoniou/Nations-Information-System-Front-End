import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

export interface Continent {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContinentService {
  private apiUrl = `${environment.apiUrl}/continents`;

  constructor(private http: HttpClient) {
  }

  getContinents(): Observable<Continent[]> {
    return this.http.get<Continent[]>(this.apiUrl);
  }
}
