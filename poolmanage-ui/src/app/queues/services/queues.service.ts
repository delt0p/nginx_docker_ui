import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';
import { IUser } from '../interfaces/iuser';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueuesService {
  clickCounter = 0;

  constructor(private req: RequestService) { }

  getUserData(): Observable<IUser[]> {
    return this.req.get<IUser[]>(env.url+"/get");
  }

  getOne(user: IUser): Observable<IUser[]> {
    return this.req.getOne<IUser[]>(env.url+"/get-one", user);
  }

  postUserData<Iuser>(url: string, user: IUser): Observable<Iuser[]> {

    return this.req.post<Iuser[]>(url, user);
  }

  deleteUserData<Iuser>(user: IUser): Observable<Iuser[]> {
    return this.req.delete<Iuser[]>(
      env.url+"/delete",
      { id: user._id }
    );
  }

  updateGame<Iuser>(currentGame: IUser, newGame: IUser): Observable<Iuser[]>{
   return this.req.update<Iuser[]>(
     env.url+"/update",
     {currentGame, newGame}
     
   ) 
  }

  
}


