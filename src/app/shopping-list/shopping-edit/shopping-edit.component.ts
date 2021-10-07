import { Ingredinet } from './../../shared/ingredient.model';
import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('itemName')
  // nameInputRef!: ElementRef;
  // @ViewChild('itemAmount')

  @ViewChild('f') slForm!: NgForm
  amountInputRef!: ElementRef;
  eidtedItemIndex!: number;
  editMode = false;
  subscription!: Subscription;
  editedItem!: Ingredinet


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startEditing.subscribe(
      (index: number) => {
        console.log(index);
        this.editMode = true;
        this.eidtedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index)
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  addItem() {

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const ingredient = { name: this.slForm.value.name, amount: this.slForm.value.amount }
    if (this.editMode == true) {
      this.shoppingListService.updateIngredient(this.eidtedItemIndex,ingredient)
    } else {
      this.shoppingListService.addIngredients(ingredient);
    }
    this.slForm.reset()
    this.editMode = false;
  }

  clearForm(){
    this.editMode = false;
    this.eidtedItemIndex = -1;
    this.slForm.reset();
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.eidtedItemIndex);
    this.clearForm();
  }


}
