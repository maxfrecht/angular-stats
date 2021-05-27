import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListeStatistiquesComponent } from './liste-statistiques/liste-statistiques.component';

const routes: Routes = [
  {path:'liste', component:ListeStatistiquesComponent},
  {path:'form', component:FormulaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
