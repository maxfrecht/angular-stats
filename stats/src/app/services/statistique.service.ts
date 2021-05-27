import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  public stats!: Statistique[];
  public URL: string = "https://stats.naminilamy.fr/";
  constructor(private http:HttpClient) { }

  getStats(): Promise<Statistique[]> {
    return this.http.get(this.URL)
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

  deleteStat(stat: Statistique) {
    this.http.delete(this.URL + stat.id)
      .toPromise()
        .then(() => {
          let indexDeleted = this.stats.findIndex(s => s.id === stat.id);
          this.stats.splice(indexDeleted, 1);
        })
  }
}
