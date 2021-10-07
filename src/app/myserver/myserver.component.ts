import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myserver',
  templateUrl: './myserver.component.html',
  styleUrls: ['./myserver.component.css']
})
export class MyserverComponent implements OnInit {
  servers:any = [];
  constructor() { }

  ngOnInit(): void {
  }

  addServer(){
    this.servers.push(Math.random())
  }
  removeServer(id:any){
    let position = id;
    this.servers.splice(position , 1)
  }

}
