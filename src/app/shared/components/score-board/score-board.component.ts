import { ILiveMatchModel } from './../../models/live-match.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {
  @Input() liveMatch?: ILiveMatchModel;

  constructor() { }

  ngOnInit(): void {
    if (!this.liveMatch) return;
  }
}
