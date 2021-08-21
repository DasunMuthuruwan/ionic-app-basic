import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Sri Lankan Kottu',
      // eslint-disable-next-line max-len
      description: 'Kottu roti is made with a type of flatbread called “Godhambara roti” or “Godamba roti” (which is also called roti canai, which originates from Malaysia, or the flakier cousin – paratha, from India), that is shredded and then mixed with vegetables, meat and eggs',
      imageurl:
        // eslint-disable-next-line max-len
        'https://lh3.googleusercontent.com/proxy/9olebyVczjuxrUrSs9yuLy87MbPTvAK8pJcRdTUGCYvR-g3DTtFpbhXYR9IBX-3_rw65EOX3v6Cb1TAPAnrB7YMKxSaV7M7nSya9_MLRtRZy9vrLE29Pfm_EfM4',
      ingredients: ['roti', 'chicken', 'onion'],
    },
    {
      id: 'r2',
      title: 'Sri Lankan Fried Rice',
      // eslint-disable-next-line max-len
      description: 'Kottu roti is made with a type of flatbread called “Godhambara roti” or “Godamba roti” (which is also called roti canai, which originates from Malaysia, or the flakier cousin – paratha, from India), that is shredded and then mixed with vegetables, meat and eggs',
      imageurl:
        // eslint-disable-next-line max-len
        'https://www.swantour.com/blogs/wp-content/uploads/2019/03/Sri-Lankan-Chicken-Fried-Rice.jpg',
      ingredients: ['Rice', 'chicken', 'Vegitables'],
    },
    {
      id: 'r3',
      title: 'Sri Lankan Kottu',
      // eslint-disable-next-line max-len
      description: 'Kottu roti is made with a type of flatbread called “Godhambara roti” or “Godamba roti” (which is also called roti canai, which originates from Malaysia, or the flakier cousin – paratha, from India), that is shredded and then mixed with vegetables, meat and eggs',
      imageurl:
        // eslint-disable-next-line max-len
        'https://lh3.googleusercontent.com/proxy/9olebyVczjuxrUrSs9yuLy87MbPTvAK8pJcRdTUGCYvR-g3DTtFpbhXYR9IBX-3_rw65EOX3v6Cb1TAPAnrB7YMKxSaV7M7nSya9_MLRtRZy9vrLE29Pfm_EfM4',
      ingredients: ['roti', 'chicken', 'onion'],
    },
    {
      id: 'r4',
      title: 'Sri Lankan Fried Rice',
      // eslint-disable-next-line max-len
      description: 'Kottu roti is made with a type of flatbread called “Godhambara roti” or “Godamba roti” (which is also called roti canai, which originates from Malaysia, or the flakier cousin – paratha, from India), that is shredded and then mixed with vegetables, meat and eggs',
      imageurl:
        // eslint-disable-next-line max-len
        'https://www.swantour.com/blogs/wp-content/uploads/2019/03/Sri-Lankan-Chicken-Fried-Rice.jpg',
      ingredients: ['Rice', 'chicken', 'Vegitables'],
    },
    {
      id: 'r5',
      title: 'Sri Lankan Kottu',
      // eslint-disable-next-line max-len
      description: 'Kottu roti is made with a type of flatbread called “Godhambara roti” or “Godamba roti” (which is also called roti canai, which originates from Malaysia, or the flakier cousin – paratha, from India), that is shredded and then mixed with vegetables, meat and eggs',
      imageurl:
        // eslint-disable-next-line max-len
        'https://lh3.googleusercontent.com/proxy/9olebyVczjuxrUrSs9yuLy87MbPTvAK8pJcRdTUGCYvR-g3DTtFpbhXYR9IBX-3_rw65EOX3v6Cb1TAPAnrB7YMKxSaV7M7nSya9_MLRtRZy9vrLE29Pfm_EfM4',
      ingredients: ['roti', 'chicken', 'onion'],
    },
    {
      id: 'r6',
      title: 'Sri Lankan Fried Rice',
      // eslint-disable-next-line max-len
      description: 'Kottu roti is made with a type of flatbread called “Godhambara roti” or “Godamba roti” (which is also called roti canai, which originates from Malaysia, or the flakier cousin – paratha, from India), that is shredded and then mixed with vegetables, meat and eggs',
      imageurl:
        // eslint-disable-next-line max-len
        'https://www.swantour.com/blogs/wp-content/uploads/2019/03/Sri-Lankan-Chicken-Fried-Rice.jpg',
      ingredients: ['Rice', 'chicken', 'Vegitables'],
    },
    {
      id: 'r7',
      title: 'Sri Lankan Kottu',
      // eslint-disable-next-line max-len
      description: 'Kottu roti is made with a type of flatbread called “Godhambara roti” or “Godamba roti” (which is also called roti canai, which originates from Malaysia, or the flakier cousin – paratha, from India), that is shredded and then mixed with vegetables, meat and eggs',
      imageurl:
        // eslint-disable-next-line max-len
        'https://lh3.googleusercontent.com/proxy/9olebyVczjuxrUrSs9yuLy87MbPTvAK8pJcRdTUGCYvR-g3DTtFpbhXYR9IBX-3_rw65EOX3v6Cb1TAPAnrB7YMKxSaV7M7nSya9_MLRtRZy9vrLE29Pfm_EfM4',
      ingredients: ['roti', 'chicken', 'onion'],
    },
    {
      id: 'r9',
      title: 'Sri Lankan Fried Rice',
      // eslint-disable-next-line max-len
      description: 'Kottu roti is made with a type of flatbread called “Godhambara roti” or “Godamba roti” (which is also called roti canai, which originates from Malaysia, or the flakier cousin – paratha, from India), that is shredded and then mixed with vegetables, meat and eggs',
      imageurl:
        // eslint-disable-next-line max-len
        'https://www.swantour.com/blogs/wp-content/uploads/2019/03/Sri-Lankan-Chicken-Fried-Rice.jpg',
      ingredients: ['Rice', 'chicken', 'Vegitables'],
    },
    {
      id: 'r10',
      title: 'Sri Lankan Kottu',
      // eslint-disable-next-line max-len
      description: 'Kottu roti is made with a type of flatbread called “Godhambara roti” or “Godamba roti” (which is also called roti canai, which originates from Malaysia, or the flakier cousin – paratha, from India), that is shredded and then mixed with vegetables, meat and eggs',
      imageurl:
        // eslint-disable-next-line max-len
        'https://lh3.googleusercontent.com/proxy/9olebyVczjuxrUrSs9yuLy87MbPTvAK8pJcRdTUGCYvR-g3DTtFpbhXYR9IBX-3_rw65EOX3v6Cb1TAPAnrB7YMKxSaV7M7nSya9_MLRtRZy9vrLE29Pfm_EfM4',
      ingredients: ['roti', 'chicken', 'onion'],
    },
    {
      id: 'r11',
      title: 'Sri Lankan Fried Rice',
      // eslint-disable-next-line max-len
      description: 'Kottu roti is made with a type of flatbread called “Godhambara roti” or “Godamba roti” (which is also called roti canai, which originates from Malaysia, or the flakier cousin – paratha, from India), that is shredded and then mixed with vegetables, meat and eggs',
      imageurl:
        // eslint-disable-next-line max-len
        'https://www.swantour.com/blogs/wp-content/uploads/2019/03/Sri-Lankan-Chicken-Fried-Rice.jpg',
      ingredients: ['Rice', 'chicken', 'Vegitables'],
    },
  ];

  constructor() {}

  public getAllRecipes() {
    return [...this.recipes];
  }

  public getRecipeDetail(recipeId: string) {
    // console.log(this.recipes.find(recipe => recipe.id === recipeId));
    // return the particular id recipe data
    return this.recipes.find((recipe) => recipe.id === recipeId);
  }
  public deleteRecipe(recipeId: string) {
    // console.log(this.recipes.filter((recipe) => recipe.id !== recipeId));
    return this.recipes.filter((recipe) => recipe.id !== recipeId);
  }
}
