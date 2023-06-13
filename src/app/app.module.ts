import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomCarouselModule } from './custom-carousel/custom-carousel.module';
import {CustomCarouselComponent} from "./custom-carousel/custom-carousel.component";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    CustomCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomCarouselModule,
    CarouselModule,
    TagModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
