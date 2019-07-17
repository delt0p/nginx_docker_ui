import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InitialServiceService } from 'src/app/shared-module/services/initial-service.service';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss']
})
export class RemoveUserComponent implements OnInit {
  @Input() userId: string;
  @Output() deleted = new EventEmitter<any>();

  constructor(private serv: InitialServiceService) { }

  ngOnInit() {
  }

  removeUser() {
    this.serv.deleteUserById(this.userId).subscribe((x) =>{
      console.log('I may have removed someone...');
      this.deleted.emit();
    })
  }

}
