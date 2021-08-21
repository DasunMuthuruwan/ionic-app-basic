import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeAddPageRoutingModule } from './recipe-add-routing.module';

import { RecipeAddPage } from './recipe-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RecipeAddPage]
})
export class RecipeAddPageModule {}
