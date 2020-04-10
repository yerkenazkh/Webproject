import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../interfaces/Ticket';
import { City } from '../interfaces/City';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  private _url = 'assets/tickets.json'
  private cities_url = 'assets/cities.json'

  get(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this._url)
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.cities_url)
  }
}
