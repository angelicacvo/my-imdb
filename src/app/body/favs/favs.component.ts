import { Component, Input } from '@angular/core';
import { FavMovie } from '../fav-movies';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css'],
})
export class FavsComponent {
  @Input() favMovies: FavMovie[] = [];
}
