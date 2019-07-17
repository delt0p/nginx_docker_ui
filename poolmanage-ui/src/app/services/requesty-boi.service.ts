import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestyBoiService {

  constructor(private http: HttpClient) { }

  get(url): Observable<any> {
    return this.http.get(url)
  }
}
