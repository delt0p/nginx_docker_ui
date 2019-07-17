import { Component, OnInit } from '@angular/core';
import { InitialServiceService } from '../../shared-module/services/initial-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User, Iuser } from '../interfaces/iuser';
import { UserUpdateStatsComponent } from '../../shared-module/user-update-stats/user-update-stats.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  createUserForm = new FormGroup({
    username: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl('')
  });
  loginForm: any;

  constructor(private serv: InitialServiceService, private updateStats: UserUpdateStatsComponent) { }

  ngOnInit() {
  }

  createUserFormSubmitted() {
    console.log('Submitted');
  }

  addUser() {
    const user: Iuser = this.createUserForm.value;
    this.serv.postUserData(user).subscribe((x) =>{
      console.log('It might have worked');
    })
  }

  

}
