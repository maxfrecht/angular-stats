import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  public stats!: Statistique[];
  constructor(private http:HttpClient) { }

  getStats(): Promise<Statistique[]> {
    return this.http.get("https://stats.naminilamy.fr/")
            .toPromise()
              .then((data:any) => {
                let statsTab:Statistique[] = [];
                data.forEach((stat:any) => {
                  statsTab.push(new Statistique(stat.id, stat.title, stat.value, stat.appreciation))
                })
                this.stats = statsTab;
                return statsTab;
              }, e => e)
  }
}
