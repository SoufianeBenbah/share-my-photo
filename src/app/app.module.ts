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
import { DiaporamaModalComponent } from './diaporama-modal/diaporama-modal.component';
import { HomeComponent } from './home/home.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

const routes:Routes=[
  {path: 'add', component: AddPictureComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'  }
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddPictureComponent,
    GalleryComponent,
    DiaporamaModalComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
