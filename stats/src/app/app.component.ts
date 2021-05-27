import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public stats: Statistique[] = [
    new Statistique('1234', 'habitants StEtienne', '171 057', 'SUCCESS'),
    new Statistique('5678', 'habitants Paris', '2,161 millions', 'WARNING'),
  ];

  constructor() {
    setTimeout(() => {
      this.stats.push(new Statistique('9101', 'habitants Montpellier', '277 639', 'SUCCESS'))
    }, 4000);
  }
}
