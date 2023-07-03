import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentViewComponent } from './recent-view/recent-view.component';

const routes: Routes = [
  // Other routes...
  { path: 'recent-view', component: RecentViewComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
