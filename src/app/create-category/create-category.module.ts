import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategoryComponent } from './create-category.component';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";



@NgModule({
    declarations: [
        CreateCategoryComponent
    ],
    exports: [
        CreateCategoryComponent
    ],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule
  ]
})
export class CreateCategoryModule { }
