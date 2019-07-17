import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './users/user-page/user-page.component';
import { ScoresComponent } from './scores/scores.component';
import { ScoresModule } from './scores/scores.module';
import { UserprofileComponent } from './scores/userprofile/userprofile.component';
import { TableComponent } from './queues/component/table/table.component';
import { RulesComponent } from './rules/component/rules/rules.component';

const routes: Routes = [
  { path: 'userPage', component: UserPageComponent },
  { path: 'scores', component: ScoresComponent },
  { path: 'login', component: TableComponent },
  // { path: 'rules', component: RulesComponent },
  { path: '', component: TableComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
