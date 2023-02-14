import { Component } from '@angular/core';
import { FavMovie } from './fav-movies';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {

  favMovies: FavMovie[] = [
      {
        score: 4.6,
        title: '1917',
        favMovieImages:
          {
            img: "./assets/img/1917.png"
          },
      },
      {
        score: 5.0,
        title: 'Avatar',
        favMovieImages:
          {
            img: "./assets/img/avatar.png"
          },
      },
      {
        score: 4.6,
        title: 'Black swan',
        favMovieImages:
          {
            img: "./assets/img/black-swan.png"
          }
      },
      {
        score: 3.1,
        title: 'Dora',
        favMovieImages:
          {
            img: "./assets/img/dora.png"
          }
      },
      {
        score: 4.9,
        title: 'Avengers: endgame',
        favMovieImages:
          {
            img: "./assets/img/endgame.png"
          }
      },
      {
        score: 3.8,
        title: 'Iron man',
        favMovieImages:
          {
            img: "/assets/img/ironman.png"
          }
      },
    
      {
        score: 2.6,
        title: 'Jaws',
        favMovieImages:
          {
            img: "./assets/img/jaws.png"
          }
      },
      {
        score: 4.8,
        title: 'Joker',
        favMovieImages:
          {
            img: "./assets/img/joker.png"
          }
      },
      {
        score: 4.8,
        title: 'Lady Bird',
        favMovieImages:
          {
            img: "./assets/img/ladybird.png"
          }
      },
      {
        score: 4.3,
        title: 'Moonlight',
        favMovieImages:
          {
            img: "../assets/img/moonlight.png"
          }
      },
      {
        score: 4.1,
        title: 'OUTIH',
        favMovieImages:
          {
            img: "./assets/img/outih.png"
          }
      },
      {
        score: 3.1,
        title: 'ShangChi',
        favMovieImages:
          {
            img: "./assets/img/shangchi.png"
          }
      }
    ]
}
