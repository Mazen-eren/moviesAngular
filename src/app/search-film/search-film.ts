import { Component } from '@angular/core';
import { Film } from '../model/model-film';
import { Realisateur } from '../model/model-realisateur';
import { CommonModule } from '@angular/common';
import { Movie } from '../services/movie';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-search-film',
  styleUrl: './search-film.css',
  templateUrl: './search-film.html',
})
export class SearchFilm {
  list_film: Film[];
  titreFilm: string = '';
  list_realiz: Realisateur[];
  realizNumRech: number = 0;
  critere: string = 'titre';

  constructor(private m: Movie) {
    this.list_film = m.listMovies();
    this.list_realiz = this.m.listRealiz();
  }

  onCritereChange() {
    this.list_film = this.m.listMovies();
    this.realizNumRech = 0;
    this.titreFilm = '';
  }

  chercherParTitre(title: string) {
    this.list_film = this.m.listMovies();
    this.list_film = this.list_film.filter((f) =>
      f.titre.toLowerCase().includes(title.toLowerCase())
    );
  }

  chercherParRealiz() {
    this.list_film = this.m.listMovies();
    if (this.realizNumRech != 0) {
      this.list_film = this.list_film.filter(
        (f) => f.realiz.num == this.realizNumRech
      );
    }
  }

  chercherParGenre(genre: string) {
    this.list_film = this.m.listMovies();
    if (genre && genre !== '') {
      this.list_film = this.list_film.filter((f) =>
        f.genre.toLowerCase().includes(genre.toLowerCase())
      );
    }
  }

  convertDuree(duree: number): string {
    const hours = Math.floor(duree / 60);
    const minutes = duree % 60;
    return `${hours}h ${minutes}min`;
  }
}
