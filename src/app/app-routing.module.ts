import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentViewComponent } from './recent-view/recent-view.component';
import {CreateCategoryComponent} from "./create-category/create-category.component";
import {EditViewComponent} from "./edit-view/edit-view.component";
import {CreateViewComponent} from "./create-view/create-view.component";

const routes: Routes = [
  { path: '', redirectTo: '/recent', pathMatch: 'full' },
  { path: 'recent', component: RecentViewComponent },
  { path: 'category', component: CreateCategoryComponent },
  { path: 'edit', component: EditViewComponent },
  { path: 'create', component: CreateViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
