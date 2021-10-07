import { ServerService } from './server.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css'],
})
export class ServeComponent implements OnInit {
  servers:{id:number , name:string , status : string}[] = [];
  constructor(private serverService:ServerService , public authService:AuthService) { }

  ngOnInit(): void {
    this.servers = this.serverService.getServers();
  }

}
