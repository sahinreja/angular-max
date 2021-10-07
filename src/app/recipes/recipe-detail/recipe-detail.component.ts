import { Subscription } from 'rxjs';
import { RecipeService } from './../recipe.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit , OnDestroy {
  recipe :any;
  id!: number;
  subscription!:Subscription;
  constructor(private recipeService:RecipeService , private router:ActivatedRoute , private route:Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id)
        // this.recipe = this.recipeService.recipesEmmit.subscribe(
        //   (recipe:any)=>{
        //     this.recipe = recipe;
        //   }
        // )
        console.log(this.recipe);
        
      }
    )
    

    this.subscription = this.recipeService.recipesEmmit.subscribe(
      (recipe)=>{
        this.recipe = recipe;
        console.log(this.recipe);
        
      }
    )

    console.log(this.recipe);
    
    // if(this.recipe){
    //   this.route.navigate(['../'] , {relativeTo:this.router})
    // }
    
  }

  addToShoppingList(){
    this.recipeService.addToShoppingListIngredient(this.recipe.ingredients)
  }

  onEditRecipe(){
    this.route.navigate(['edit'] , {relativeTo:this.router})
    // this.route.navigate(['../' , this.id , 'edit'] , {relativeTo:this.router})
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.route.navigate(['/recipe'])
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  

}
