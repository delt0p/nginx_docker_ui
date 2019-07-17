import { Injectable } from '@angular/core';
import { RequestyBoiService } from 'src/app/services/requesty-boi.service';
import * as ops from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  clickCounter = 0;

  constructor(private reqboi: RequestyBoiService) { }

  incclickcounter(): void {
    this.clickCounter++;

  }

  getusrdata() {
    return this.reqboi.get('http://www.omdbapi.com/?i=tt3896198&apikey=c9f6ddc2')
      .pipe(
        ops.map(x =>{
          return x+ ' soem thisn ';
        })
      )
  }
}
