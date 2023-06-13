import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditViewComponent } from './edit-view.component';
import {SplitterModule} from "primeng/splitter";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditorModule} from "primeng/editor";
import {ButtonModule} from "primeng/button";
import {ListboxModule} from "primeng/listbox";
import {DropdownModule} from "primeng/dropdown";



@NgModule({
  declarations: [
    EditViewComponent
  ],
  exports: [
    EditViewComponent
  ],
  imports: [
    CommonModule,
    SplitterModule,
    InputTextModule,
    ReactiveFormsModule,
    EditorModule,
    FormsModule,
    ButtonModule,
    ListboxModule,
    DropdownModule
  ]
})
export class EditViewModule { }
