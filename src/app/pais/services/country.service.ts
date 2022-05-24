import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = environment.api;

  constructor(private httpClient: HttpClient) { }

  searchByName(name: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${name}`);
  }

  searchByCapital(capital: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${capital}`)
  }

  getCountryByCode(code: string) {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
  }

  getCountriesByRegion(region: string) {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/region/${region}`)
  }

}
