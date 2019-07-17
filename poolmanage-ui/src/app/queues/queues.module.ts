import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './component/table/table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  exports:[
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    QueuesModule
  ]
})
export class QueuesModule { }
