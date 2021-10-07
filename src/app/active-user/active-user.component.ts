import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  activeUser : any = []; 
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.activeUser = this.userService.aciveUser;
    console.log(this.userService.aciveUser);
  }

  onSetToInActive(id:number){
    this.userService.setInActive(id);
  }

}
