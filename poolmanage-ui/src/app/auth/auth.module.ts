import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './comps/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  providers:[
    AuthModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
