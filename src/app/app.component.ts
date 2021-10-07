// import { AuthService } from './auth.service';
import { AuthService } from './auth/auth-service';
import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'angular-orelly';
  serverElement :any= [{type:'server' , name:'TestServer' , content:'This is test content'}];
  
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];
  viewComponent : string = 'recipe';


  accounts:{name : string , status : string}[] = [];
  constructor(private accountsService:AccountsService , private authService:AuthService , private authServices:AuthService){}

  ngOnInit(){
    // this.accounts = this.accountsService.accounts;
    // this.authService.isAuthenticated().then(res=>console.log(res)
    // )
    this.authServices.autoLoggin();
  }
  
  onServerAddres(eventValue:{type:string , name:string , content:string}){
    this.serverElement.push({
      type:eventValue.type,
      name:eventValue.name,
      content:eventValue.content
    }
    )
    // console.log(eventValue);
  }
  onServerBluePrint(eventValue:{type:string , name:string , content:string}){
    this.serverElement.push({
      type:eventValue.type,
      name:eventValue.name,
      content:eventValue.content
    }
    )
  }

  onIntervalFired(firedNumber:number){
    console.log(firedNumber);
    if(firedNumber%2 != 0){
      this.oddNumbers.push(firedNumber);
    }else{
      this.evenNumbers.push(firedNumber)
    }
  }


  viewSelectedComponent(component:string){
    console.log(component);
    this.viewComponent = component;
  }





}
