import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score/score.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ScoresComponent } from './scores.component';

@NgModule({
  declarations: [
    ScoreComponent,
    UserprofileComponent,
    ScoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserprofileComponent,
    ScoreComponent
  ]
})
export class ScoresModule { }
