import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPictureComponent } from './add-picture/add-picture.component';
import { GalleryComponent } from './gallery/gallery.component';
import {PostService} from "./services/post.service";
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";

const routes:Routes=[
  {path: 'add', component: AddPictureComponent},
  {path: 'gallery', component: GalleryComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddPictureComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
