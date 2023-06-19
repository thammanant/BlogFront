import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CustomCarouselComponent} from "./custom-carousel/custom-carousel.component";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";

import { CustomCarouselModule } from './custom-carousel/custom-carousel.module';
import { EditViewModule } from "./edit-view/edit-view.module";
import {CreateCategoryModule} from "./create-category/create-category.module";
import {CreateViewModule} from "./create-view/create-view.module";
import {RecentViewModule} from "./recent-view/recent-view.module";

@NgModule({
  declarations: [
    AppComponent,
    CustomCarouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomCarouselModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    EditViewModule,
    CreateCategoryModule,
    CreateViewModule,
    RecentViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
