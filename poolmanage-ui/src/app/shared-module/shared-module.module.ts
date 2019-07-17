import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserUpdateStatsComponent } from './user-update-stats/user-update-stats.component';

@NgModule({
  declarations: [UserUpdateStatsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UserUpdateStatsComponent
  ]
})
export class SharedModuleModule { }
