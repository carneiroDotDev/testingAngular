import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'Its a test 1', 'https://www.cookingclassy.com/wp-content/uploads/2019/05/fiesta-rice-recipe-7.jpg',[new Ingredient('meat', 1), new Ingredient('fries', 20)] ),
    new Recipe('A test recipe 2', 'Its a test 2', 'https://www.cookingclassy.com/wp-content/uploads/2019/05/fiesta-rice-recipe-7.jpg',[new Ingredient('md', 5), new Ingredient('friesss', 2)] )
  ]

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes(){
      return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients)
  }
}