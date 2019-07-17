import { Injectable } from '@angular/core';
import { DataRequestService } from 'src/app/shared-module/services/data-request.service';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/users/interfaces/iuser';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InitialServiceService {

  clickCounter = 0;

  constructor(private req: DataRequestService) { }

  incrementClickCounter(): void {
    this.clickCounter++;
    console.log(this.clickCounter);
  }

  getUserData(): Observable<Iuser[]> {
    return this.req.get<Iuser[]>(env.url+'/user/all');
  }

  getOneUser(username: Iuser): Observable<Iuser> {
    let urlString = env.url+'/user/byUsername?username=' + username.username;
    return this.req.getOne<Iuser>(urlString);

  }

  postUserData<Iuser>(user: Iuser): Observable<Iuser> {
    return this.req.post<Iuser>(env.url+'/user/create', user);
  }

  changeMultiple<Iuser>(username: string, user: Iuser): Observable<Iuser> {
    return this.req.put<Iuser>(env.url+'/user/updateUser/' + username + '/', user);
  }

  incrementWin(username: string): Observable<Iuser> {
    return this.req.putIncrement(env.url+'/user/updateUserInfo/win/' + username, JSON.stringify(""));
  }

  incrementLoss(username: string): Observable<Iuser> {
    return this.req.putIncrement(env.url+'/user/updateUserInfo/loss/' + username, JSON.stringify(""));
  }

  incrementGamesPlayed(username: string): Observable<Iuser> {
    return this.req.putIncrement(env.url+'/user/updateUserInfo/gamesPlayed/' + username, JSON.stringify(""));
  }

  deleteUserById<Iuser>(id: string): Observable<Iuser> {
    console.log(id);
    return this.req.delete<Iuser>(env.url+'/user/deleteUser?id=' + id);
  }
}
