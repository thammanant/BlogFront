import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentViewComponent } from './recent-view.component';
import {SplitterModule} from "primeng/splitter";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {PanelModule} from "primeng/panel";
import {CheckboxModule} from "primeng/checkbox";



@NgModule({
  declarations: [
    RecentViewComponent
  ],
  exports: [
    RecentViewComponent
  ],
    imports: [
        CommonModule,
        SplitterModule,
        DropdownModule,
        InputTextModule,
        ReactiveFormsModule,
        FormsModule,
        ButtonModule,
        PanelModule,
        CheckboxModule
    ]
})
export class RecentViewModule { }
