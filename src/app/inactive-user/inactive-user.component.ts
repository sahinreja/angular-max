import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  inActiveUser!:string[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.inActiveUser = this.userService.inAciveUser;
  }

  setToActive(id:number){
    this.userService.setAcitve(id);
  }

}
