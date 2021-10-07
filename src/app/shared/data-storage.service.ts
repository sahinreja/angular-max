import { RecipeService } from './../recipes/recipe.service';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from 'rxjs/operators'
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth-service';


@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
    }

    storeRecipe() {
        const recipes = this.recipeService.getRecipes()

        this.http.put('https://ng-recipes-book-499d1-default-rtdb.firebaseio.com/recieps.json', recipes).subscribe(
            (res) => {
                console.log(res);
            }
        )
    }

    fetchRecipe() {
        return this.http.get<Recipe[]>('https://ng-recipes-book-499d1-default-rtdb.firebaseio.com/recieps.json')
            .pipe(
                map((responseData) => {
                    return responseData.map((recipe) => {
                        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                    })
                }),
                tap((recipe) => {
                    this.recipeService.setRecipe(recipe)
                })
            )
    }
}