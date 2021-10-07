import { AccountsService } from './../accounts.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: any;
  @Input()id!: number;
  constructor(private accountsService:AccountsService) { }

  ngOnInit(): void {
  }

  setToStatus(statusChange:string){
    console.log(statusChange);
    this.accountsService.updateAccount(this.id ,statusChange);
    this.accountsService.updateStatus.emit(statusChange);
  }

}
