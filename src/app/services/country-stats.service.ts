import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface CountryStats {
  countryId: number;
  countryName: string;
  year: number;
  population: number;
  gdp: number;
  regionId: number;
}

@Injectable({
  providedIn: 'root'
})
export class CountryStatsService {
  private apiUrl = `${environment.apiUrl}/country-stats`;

  constructor(private http: HttpClient) { }

  getCountryStats(): Observable<CountryStats[]> {
    return this.http.get<CountryStats[]>(this.apiUrl);
  }

  getCountryStatsByCountryId(countryId: number): Observable<CountryStats[]> {
    return this.http.get<CountryStats[]>(`${this.apiUrl}/country/${countryId}`);
  }
}
