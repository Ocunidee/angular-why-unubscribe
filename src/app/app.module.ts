import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    HomeComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    NavbarComponent,
    LoaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
