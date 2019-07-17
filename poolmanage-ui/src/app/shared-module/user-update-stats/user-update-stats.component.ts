import { Component, OnInit } from '@angular/core';
import { InitialServiceService } from 'src/app/shared-module/services/initial-service.service';

@Component({
  selector: 'app-user-update-stats',
  templateUrl: './user-update-stats.component.html',
  styleUrls: ['./user-update-stats.component.scss']
})
export class UserUpdateStatsComponent implements OnInit {



  constructor(private service: InitialServiceService) { }

  ngOnInit() {
  }

  updateWin(){
    this.service.incrementWin(JSON.parse(sessionStorage.getItem("currentUsername"))).subscribe((x)=>{
      console.log(x);
    });
  }

  updateLoss(){
    this.service.incrementLoss(JSON.parse(sessionStorage.getItem("currentUsername"))).subscribe((x)=>{
      console.log(x);
    });
  }

  updateGamesPlayed(){
    this.service.incrementGamesPlayed(JSON.parse(sessionStorage.getItem("currentUsername"))).subscribe((x)=>{
      console.log(x);
    });
  }
  

}
