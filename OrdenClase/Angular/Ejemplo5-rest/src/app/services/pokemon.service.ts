import { getLocaleCurrencyCode } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  url: string = 'https://pokeapi.co/api/v2/pokemon';

  cabeceras: HttpHeaders = new HttpHeaders({
    'content-type': 'application/json',
  });
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.url, { headers: this.cabeceras });
  }
}
