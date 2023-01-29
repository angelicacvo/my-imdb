import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  favMovies = [
    {
      score: 4.6,
      title: '1917',
      img: "./assets/img/1917.png"
    },
    {
      score: 5,
      title: 'Avatar',
      img: "./assets/img/avatar.png"
    },
    {
      score: 4.6,
      title: 'Black swan',
      img: "./assets/img/black-swan.png"
    },
    {
      score: 4.6,
      title: 'Dora',
      img: "./assets/img/dora.png"
    },
    {
      score: 4.6,
      title: 'Avengers: endgame',
      img: "./assets/img/endgame.png"
    },
    {
      score: 4.6,
      title: 'Iron man',
      img: "/assets/img/ironman.png"
    },
  ]
}
