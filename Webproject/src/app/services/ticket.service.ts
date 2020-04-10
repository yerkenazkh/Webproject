import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  get(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this._url)
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.cities_url)
  }

  set(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this._url, ticket, this.httpHeaders)
  }
  delete(ticket: Ticket): Observable<Ticket> {
    return this.http.delete<Ticket>(this._url + ticket.id.toString())
  }


}
