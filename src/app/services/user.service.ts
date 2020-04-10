import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private _url = ''
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  Login(user): Observable<User>{
    return this.http.post<User>(this._url+'/login/', user, this.httpHeaders)
  }

  Register(user): Observable<User>{
    return this.http.post<User>(this._url+'/register/', user, this.httpHeaders)
  }
  
}
