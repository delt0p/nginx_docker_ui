import { Component, OnInit } from '@angular/core';
import { InitialServiceService } from 'src/app/shared-module/services/initial-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Iuser } from '../interfaces/iuser';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  currentUsername = sessionStorage.getItem("currentUsername");

  constructor(private serv: InitialServiceService) { }

  loginForm = new FormGroup({
    username: new FormControl('')
  });

  allUsers: Iuser[];

  ngOnInit() {
  }

  getAllUsers() {
    this.serv.getUserData().subscribe((x) => {
      console.log('WHY DOES THIS WORK NOW', x);
      this.allUsers = x;
    });
  }

  getSingleUser() {
    console.log(this.loginForm.value);
    this.serv.getOneUser(this.loginForm.value).subscribe((x) => {
      console.log('WHY DOES THIS WORK NOWsgsegseges', x);
      this.allUsers = [x];
      let { username } = [x][0];
      console.log(username);
      sessionStorage.setItem("currentUsername", JSON.stringify(username));
    });
    }

}
