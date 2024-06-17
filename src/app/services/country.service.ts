import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Country {
  id: number;
  name: string;
  area: number;
  countryCode2: string;
  countryCode3: string;
  regionId: number;
}

export interface Language {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = `${environment.apiUrl}/countries`;

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }

  getCountryLanguages(countryId: number): Observable<Language[]> {
    return this.http.get<Language[]>(`${environment.apiUrl}/country-language/country/${countryId}`);
  }
}
