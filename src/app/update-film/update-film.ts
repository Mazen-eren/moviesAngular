import { Component } from '@angular/core';
import { Film } from '../model/model-film';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Movie } from '../services/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { Realisateur } from '../model/model-realisateur';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-update-film',
  styles: ``,
  templateUrl: './update-film.html',
})
export class UpdateFilm {
  filmCourant = new Film();
  tab_genre: string[] = ['Action', 'Comédie', 'Policier', 'Fantastique', 'Science Fiction'];
  directors!: Realisateur[];
  numModifie!: number;

  constructor(
    private actRoute: ActivatedRoute,
    private rout: Router,
    private m: Movie
  ) {
    this.directors = this.m.listRealiz();
    this.filmCourant = this.m.viewMovie(this.actRoute.snapshot.params['id']);
    console.log('Film à modifier ' + this.filmCourant.titre);
    this.numModifie = this.filmCourant.realiz.num;
  }

  modifFilm() {
    this.filmCourant.realiz = this.m.viewRealiz(this.numModifie);
    this.m.editMovie(this.filmCourant);
    console.log(
      'Succès de modification du film : ' +
        this.filmCourant.titre +
        ' ' +
        this.filmCourant.genre +
        ' ' +
        this.filmCourant.realiz.nom +
        ' ' +
        this.filmCourant.dateSortie +
        ' ' +
        this.filmCourant.duree +
        'min ' +
        this.filmCourant.note +
        '/10'
    );
    this.rout.navigate(['films']);
  }
}
