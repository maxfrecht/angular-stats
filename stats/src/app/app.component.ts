import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiqueService } from './services/statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public stats!: Statistique[];

  constructor(private api: StatistiqueService) {
    this.api.getStats().then((statsTab) => {
      this.stats = statsTab;
    });
  }

  deleteStat(stat: Statistique) {
    this.api.deleteStat(stat)
  }
}
