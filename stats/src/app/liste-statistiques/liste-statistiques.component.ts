import { Component} from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../services/statistique.service';

@Component({
  selector: 'app-liste-statistiques',
  templateUrl: './liste-statistiques.component.html',
  styleUrls: ['./liste-statistiques.component.scss']
})
export class ListeStatistiquesComponent{

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
