import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public stat1 = new Statistique('1234', 'habitants StEtienne', '171 057', 'SUCCESS')
  public stat2 = new Statistique('5678', 'habitants Paris', '2,161 millions', 'WARNING')
}
