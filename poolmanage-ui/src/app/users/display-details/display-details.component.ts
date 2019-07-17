import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iuser } from '../interfaces/iuser';
import { InitialServiceService } from 'src/app/shared-module/services/initial-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.scss']
})
export class DisplayDetailsComponent implements OnInit {

   userObject: Iuser;
   userKeys: string[];
   showUpdateForm: boolean = true;

   updateNamesForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl('')
  });

  @Input() set user(u: Iuser) {
    this.userObject = u;
    this.userKeys = Object.keys(u || {});
  }

  @Output() deleted = new EventEmitter<any>();
  @Output() updated = new EventEmitter<any>();

  constructor(private serv: InitialServiceService) { }

  ngOnInit() {
  }

  handleDeleted() {
    console.log("hello"); 
    this.deleted.emit();
  }

  changeNames() {
    const newNames = this.updateNamesForm.value;
    this.serv.changeMultiple(this.userObject.username, newNames).subscribe((x) =>{
      console.log("updated?");
      this.updated.emit();
    });
  }

}
