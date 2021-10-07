// import { Injectable } from "@angular/core";

import { EventEmitter } from "@angular/core";

// @Injectable({
//     providedIn:'root'
// })
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        }
    ]

    updateStatus = new EventEmitter<string>();

    addAccount(name:string , status:string){
        this.accounts.push({name , status});
    }

    updateAccount(id:number , status:string){
        this.accounts[id].status = status;
    }
}