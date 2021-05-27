import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class StatistiqueService {
  public stats!: Statistique[];
  public URL: string = 'https://stats.naminilamy.fr/';
  constructor(private http: HttpClient) {
    this.connectToWs();
  }

  connectToWs() {
    webSocket(
      'wss://ac88n1oa17.execute-api.eu-west-3.amazonaws.com/dev'
    ).subscribe(
      (data: any) => {
        console.log(data);
        let statsTab: Statistique[] = [];
        switch (data.type) {
          case "NEW_DATA":
            let newData = new Statistique(data.object.id, data.object.title, data.object.value, data.object.appreciation);
            let newDataIndex = this.stats.findIndex(s => s.id === newData.id);
            if(newDataIndex === -1) {
              this.stats.push(newData)
            }
            break;
          case "DELETED_DATA":
            let deleted = this.stats.findIndex(s => s.id === data.object.id);
            if(deleted!==-1) {
              this.stats.splice(deleted, 1)
            }
            break;
          default:
            break;
        }
        return statsTab;
      },
      (err) => console.log(err),
      () => {
        console.log('Websocket disconnected. Retry.');
        this.connectToWs();
      }
    );
  }

  getStats(): Promise<Statistique[]> {
    return this.http
      .get(this.URL)
      .toPromise()
      .then(
        (data: any) => {
          let statsTab: Statistique[] = [];
          data.forEach((stat: any) => {
            statsTab.push(
              new Statistique(
                stat.id,
                stat.title,
                stat.value,
                stat.appreciation
              )
            );
          });
          this.stats = statsTab;
          return statsTab;
        },
        (e) => e
      );
  }

  deleteStat(stat: Statistique) {
    this.http
      .delete(this.URL + stat.id)
      .toPromise()
      .then(
        () => {
          let indexDeleted = this.stats.findIndex((s) => s.id === stat.id);
          this.stats.splice(indexDeleted, 1);
        },
        (e) => e
      );
  }

  postStat(data: Object): Promise<Statistique> {
    return this.http
      .post(this.URL, data)
      .toPromise()
      .then(
        (posted: any) => {
          let newStat = new Statistique(
            posted.id,
            posted.title,
            posted.value,
            posted.appreciation
          );
          this.stats.push(newStat);
          return newStat;
        },
        (e) => e
      );
  }
}
