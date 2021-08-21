import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.page.html',
  styleUrls: ['./recipe-add.page.scss'],
})
export class RecipeAddPage implements OnInit {

  validationRecipeMessage = {
    title: [{ type: 'required', message: 'Please enter recipe title' }],
    description: [
      { type: 'required', message: 'Please enter recipe description' },
    ],
    image: [{ type: 'required', message: 'Please enter image' }],
    ingridients: [
      { type: 'required', message: 'Please enter recipe ingridients' },
    ],
  };

  formRecipe: FormGroup;

  constructor(public formbuilder: FormBuilder) {}

  ngOnInit() {
    this.formRecipe = this.formbuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      ingridients: new FormControl('', Validators.required),
    });
  }

  submitRecipe(value: any){

  }
}
