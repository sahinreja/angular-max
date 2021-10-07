import { Subscription } from 'rxjs';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth-service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit  , OnDestroy{

  recipeSubscription!: Subscription;

  recipes!: Recipe[];

  buttonText = 'Please Verify Your Email'
  bgColor = 'white'
  color = 'black'
  
  constructor(private reciepService:RecipeService , 
    private router:Router,
    private activeRoute:ActivatedRoute , private authService:AuthService) {
  }

  ngOnInit(): void {


    this.recipes = this.reciepService.getRecipes()
    this.recipeSubscription = this.reciepService.recipesEmmit.subscribe(
      (recips:any)=>{
        this.recipes = recips;
      }
    )
  }

  selectedItem(item:any){
    // console.log(item) 
  }
  onNewRecipe(){
    this.router.navigate(['new'] , {relativeTo:this.activeRoute})
  }

  ngOnDestroy(){
    this.recipeSubscription.unsubscribe();
  }

  verifyEmail(){
    this.authService.verifyEmail().subscribe(
      (res)=>{
        this.buttonText = 'Verified Success';
        this.bgColor = 'green'
        this.color = 'white'
        console.log(res);
      },
      (errorMessage)=>{
        console.log(errorMessage);
      }
    )
  }
  

}
