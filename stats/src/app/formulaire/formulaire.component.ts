import { Component, OnInit } from '@angular/core';
import { StatistiqueService } from '../services/statistique.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  public titre!: string;
  public valeur!: string;
  public appreciation!: string;

  constructor(private api: StatistiqueService) { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    let data = {
      title: this.titre,
      value: this.valeur,
      appreciation: this.appreciation
    }
    this.api.postStat(data);
  }

}
