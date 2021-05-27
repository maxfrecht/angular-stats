import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  @Input() public statistique!:Statistique;
  @Output() public deleteEvent: EventEmitter<Statistique> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete() {
    this.deleteEvent.emit(this.statistique);
  }
}
