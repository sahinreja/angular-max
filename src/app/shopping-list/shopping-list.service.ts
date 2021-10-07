import { Subject } from "rxjs";
import { Ingredinet } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged = new Subject<Ingredinet[]>();
    ingredientAdded = new Subject<Ingredinet[]>();
    startEditing = new Subject<number>();
    private ingredients:Ingredinet[] = [
        {name:'Apple' , amount:50},
        {name:'Bannana' , amount:12},
      ]

    getShoppingList(){
        return this.ingredients.slice();
    }

    addIngredients(ingredinet:Ingredinet){
        this.ingredients.push(ingredinet)
        this.ingredientChanged.next(this.ingredients.slice());
    }
    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredientsArray(ingredients:Ingredinet[]){
        // for(let ingredient of ingredients){
        //     this.addIngredients(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice())
    }

    updateIngredient(index:number , updateInfo:any){
        this.ingredients[index].name = updateInfo.name;
        this.ingredients[index].amount = updateInfo.amount;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index , 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}