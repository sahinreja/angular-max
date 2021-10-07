import { AccountsService } from './../accounts.service';
import { Component ,  OnInit  } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  constructor(private accountsService:AccountsService) { 
    this.accountsService.updateStatus.subscribe(
      (status:string)=>{
        alert('New Update Status is ' + status);
      }
    )
  }

  ngOnInit(): void {
  }

  onCreateAccount(accountName:string , status:string){
    this.accountsService.addAccount(accountName , status);
  }

}
