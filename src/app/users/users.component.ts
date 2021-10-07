import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {id:1,name:"John"},
    {id:2,name:"Max"},
    {id:3,name:"Rick"},
    {id:4,name:"Smith"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
