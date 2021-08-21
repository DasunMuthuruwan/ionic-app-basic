import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe;

  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private altCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['recipes']);
      }
      const recipeId = paramMap.get('recipeId');
      // console.log(recipeId);
      this.recipe = this.recipeService.getRecipeDetail(recipeId);
      // console.log(this.recipe);
    });
  }

  public onDelete() {
    // console.log(this.recipeService.deleteRecipe(this.recipe.id));
    this.altCtrl
      .create({
        header: 'Are you sure ?',
        message: 'Do you really want to delete recipe ?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              console.log(this.recipe.id);
              this.recipeService.deleteRecipe(this.recipe.id);
              this.router.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }
}
