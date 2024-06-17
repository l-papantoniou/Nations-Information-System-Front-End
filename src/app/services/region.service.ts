import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Region {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private apiUrl = `${environment.apiUrl}/regions`;

  constructor(private http: HttpClient) { }

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.apiUrl);
  }
}
