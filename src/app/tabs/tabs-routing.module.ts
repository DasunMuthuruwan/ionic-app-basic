import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'recipes',
        children:[
          {
            path: '',
            loadChildren: () => import('../recipes/recipes.module').then(m => m.RecipesPageModule)
          },
          {
            path:':recipeId',
            loadChildren: () => import('../recipes/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: 'recipes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
