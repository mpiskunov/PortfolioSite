import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'porfolio-site';
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 2, color: 'lightblue' },
    { text: 'About', cols: 6, rows: 2, color: 'lightgrey' },
    { text: 'Skills', cols: 9, rows: 1, color: 'lightgreen' },
  ];
}
export class SidenavAutosizeExample {
  showFiller = false;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
