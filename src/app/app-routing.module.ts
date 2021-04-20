import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseListComponent } from './exercise-list/exercise-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/exercises', pathMatch: 'full' },
  { path: 'exercises', component: ExerciseListComponent, children: [
   
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
