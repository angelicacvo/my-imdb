import { Component, Input } from '@angular/core';
import { FavMovie } from '../fav-movies';


@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent {

  @Input() favMovies: FavMovie[] = [
  ];
  img7: string = "./assets/img/jaws.png"
  img8: string = "./assets/img/joker.png"
  img9: string = "./assets/img/ladybird.png"
  img10: string = "./assets/img/moonlight.png"
  img11: string = "./assets/img/outih.png"
  img12: string = "./assets/img/shangchi.png"
}
