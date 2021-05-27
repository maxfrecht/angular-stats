import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { FormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { BordureDirective } from './directives/bordure.directive';
import { ListeStatistiquesComponent } from './liste-statistiques/liste-statistiques.component';

@NgModule({
  declarations: [AppComponent, StatistiqueComponent, FormulaireComponent, BordureDirective, ListeStatistiquesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
