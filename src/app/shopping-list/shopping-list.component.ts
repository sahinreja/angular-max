import { ShoppingListService } from './shopping-list.service';
import { Ingredinet } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit  , OnDestroy{
  ingredients!:Ingredinet[];
  private igChanged :Subscription = new Subscription;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getShoppingList();
    this.igChanged = this.shoppingListService.ingredientChanged.subscribe(
      (ingredient:Ingredinet[])=>{
        this.ingredients = ingredient;
      }
    )
  }
  ngOnDestroy(){
    // this.igChanged.unsubscribe();
  }

  onEditItem(index:number){
    this.shoppingListService.startEditing.next(index)
  }
}
