import { User } from './../auth/user.mode';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy {

  user!: User 
  isAuthenticated = false;
  private userSub!:Subscription

  constructor(private dataStorageService: DataStorageService , private authService:AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (user:User)=>{
        this.user = user;
        this.isAuthenticated = !!user;
      }
    )
  }
  

  onSaveRecipes() {
    this.dataStorageService.storeRecipe()
  }

  onFetchData() {
    this.dataStorageService.fetchRecipe().subscribe()
  }

  logout(){
    this.authService.logout();
  }


  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
