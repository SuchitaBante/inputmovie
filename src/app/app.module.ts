import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { MovieDashboardComponent } from './shared/components/movie-dashboard/movie-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
