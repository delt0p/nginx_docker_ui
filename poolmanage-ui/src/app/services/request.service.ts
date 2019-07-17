import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IUser } from '../queues/interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  getOne<T>(url: string, params?: any): Observable<T> {
    
    return this.http.get<T>(url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: params
    });
  };

  post<T>(url: string, body: any): Observable<T> {
    
    return this.http.post<T>(url, body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  };

  delete<T>(url: string, params?: any): Observable<T> {
    
    return this.http.delete<T>(url, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: params
    });
  };

  update<T>(url: string, params?:any): Observable<T>{

    return this.http.put<T>(url, params,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: params
    })
  }
}
