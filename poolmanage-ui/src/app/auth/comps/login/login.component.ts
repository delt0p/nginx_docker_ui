import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RequestyBoiService } from 'src/app/services/requesty-boi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private requestyBoi: RequestyBoiService) {

  }

  ngOnInit() {
  }

  clicked() {
    this.auth.incclickcounter()
    console.log(this.auth)

    this.auth.getusrdata().subscribe(data => console.log(data));
    // this.requestyBoi.get().subscribe(data => console.log(data));
  }

}
