import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredinet } from './../shared/ingredient.model';
import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Subject } from 'rxjs';
import { isEmpty } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipesEmmit = new Subject()
    // private recipes: Recipe[] = [
    //     {
    //         name: 'Tasty Schnitzel',
    //         description: 'A super-tasty schnitzel - just awesome!',
    //         imagePath: 'https://toriavey.com/images/2011/02/TOA20_06-500x500.jpg',
    //         ingredients: [
    //             {
    //                 name: 'Meat',
    //                 amount: 1
    //             },
    //             {
    //                 name: "French Fries",
    //                 amount: 20
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Bit Fat Burger',
    //         description: 'What else you need to say?',
    //         imagePath: 'https://media.istockphoto.com/photos/fresh-burger-isolated-picture-id1125149183?k=6&m=1125149183&s=612x612&w=0&h=KxSfVUk3KP3BgHVYboyL9aRLHp-fRYrfPcFea0w68Ow=',
    //         ingredients: [
    //             {
    //                 name: 'Buns',
    //                 amount: 2
    //             },
    //             {
    //                 name: "Meat",
    //                 amount: 1
    //             }
    //         ]
    //     }
    // ]

    private recipes: Recipe[]  = [];

    constructor(private shoppingListService: ShoppingListService) {

    }


    setRecipe(recipe:Recipe[]){
        this.recipes = recipe;
        this.recipesEmmit.next(this.recipes.slice())
    }
    getRecipes() {
        console.log(this.recipes);
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addToShoppingListIngredient(ingredients: Ingredinet[]) {
        this.shoppingListService.addIngredientsArray(ingredients);
    }
    addRecipe(newRecipe: { name: string, description: string, imagePath: string, ingredients: Ingredinet[] }) {
        this.recipes.push(
            {
                name: newRecipe.name,
                imagePath: newRecipe.imagePath,
                description: newRecipe.description,
                ingredients:newRecipe.ingredients
            }
        );
        console.log('Add recipes  '+this.recipes);
        this.recipesEmmit.next(this.recipes.slice())
        
    }
    updateRecipe(id: number, updateInfo: { name: string, description: string, imagePath: string, ingredients?: any }) {
        this.recipes[id].name = updateInfo.name;
        this.recipes[id].description = updateInfo.description;
        this.recipes[id].imagePath = updateInfo.imagePath;
        this.recipes[id].ingredients = updateInfo.ingredients
        console.log(this.recipes);
        this.recipesEmmit.next(this.recipes.slice())
    }

    deleteRecipe(index:number){
        this.recipes.splice(index , 1);
        this.recipesEmmit.next(this.recipes.slice());
    }



}