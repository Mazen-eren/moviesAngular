import { Component } from '@angular/core';
import { Film } from '../model/model-film';
import { Movie } from '../services/movie';
import { FormsModule } from '@angular/forms';
import { Films } from '../films/films';
import {Realisateur} from '../model/model-realisateur';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-add-film',
  styleUrl: './add-film.css',
  templateUrl: './add-film.html',
})
export class AddFilm {
  newRealiz!: Realisateur;
  
  directors!: Realisateur[];
  newNum!: number;
    newFilm: Film = new Film();
    tab_genre = ["Action", "Comédie", "Fantastique", "Policier", "Science Fiction"];
  
    constructor( private m : Movie,private rout: Router) {
      this.directors = this.m.listrealiz();
     }
    
    ajouterFilm() {
      this.newRealiz = this.m.viewrealiz(this.newNum) ;
      this.newFilm.realiz = this.newRealiz ;
      this.m.addMovie(this.newFilm);
      this.rout.navigate(['films']); 
      }
}
