// ./src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
// import new component
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // add product component
    ExerciseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    ContentfulService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }