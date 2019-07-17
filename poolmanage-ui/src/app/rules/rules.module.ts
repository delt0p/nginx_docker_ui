import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesComponent } from './component/rules/rules.component';

@NgModule({
  declarations: [
    RulesComponent
  ],
  exports:[
    RulesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    RulesModule
  ]
})
export class RulesModule { }
