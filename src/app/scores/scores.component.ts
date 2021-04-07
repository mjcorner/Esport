import { Component, OnInit } from '@angular/core';

export interface ScoresElement {
  rank: number;
  name: string;
  region: string;
  trophies: number;
  points: string;
}

const ELEMENT_DATA: ScoresElement[] = [
  {rank: 1,name: 'Cormac Sebastian',region: 'Leeds',trophies: 2,points: '1,255'},
  {rank: 2,name: 'Cormac Sebastian',region: 'Leeds',trophies: 2,points: '1,255'},
  {rank: 3,name: 'Cormac Sebastian',region: 'Leeds',trophies: 2,points: '1,255'},
  {rank: 4,name: 'Cormac Sebastian',region: 'Leeds',trophies: 2,points: '1,255'},
  {rank: 5,name: 'Cormac Sebastian',region: 'Leeds',trophies: 2,points: '1,255'},
  {rank: 6,name: 'Cormac Sebastian',region: 'Leeds',trophies: 2,points: '1,255'},
];

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent {
  displayedColumns: string[] = ['Rank', 'Player name', 'Region', 'Trophies', 'Points'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSource);
  }

}
