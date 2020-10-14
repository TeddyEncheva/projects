import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { MovieImageComponent } from './movie-image/movie-image.component';
import { NavigationComponent } from './app-navigation/app-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieThumbnailComponent,
    MovieImageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
