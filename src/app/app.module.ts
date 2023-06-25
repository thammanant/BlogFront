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
import { CheckboxModule } from 'primeng/checkbox';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB4eLDyg7r6SdkSL5J4SewsmfS6FoLre7s",
  authDomain: "bestblog-51d5a.firebaseapp.com",
  databaseURL: "https://bestblog-51d5a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bestblog-51d5a",
  storageBucket: "bestblog-51d5a.appspot.com",
  messagingSenderId: "292913735225",
  appId: "1:292913735225:web:bd64693b97e61b2cd2cfe8",
  measurementId: "G-XV786L6SPC"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// @ts-ignore
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
    CheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
