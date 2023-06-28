import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateViewComponent } from './create-view.component';
import {SplitterModule} from "primeng/splitter";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {EditorModule} from "primeng/editor";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    CreateViewComponent
  ],
  exports: [
    CreateViewComponent
  ],
  imports: [
    CommonModule,
    SplitterModule,
    DropdownModule,
    InputTextModule,
    EditorModule,
    CheckboxModule,
    ButtonModule,
    FormsModule
  ]
})
export class CreateViewModule { }
