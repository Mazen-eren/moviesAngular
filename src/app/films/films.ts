import { Component } from '@angular/core';
import { Film } from '../model/model-film';
import { CommonModule } from '@angular/common';
import { Movie } from '../services/movie';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-films',
  styleUrl: './films.css',
  templateUrl: './films.html',
  
})
export class Films {
  styleAvis = {'color':'blue'};
  tab_film: Film[] 
 constructor(private m :Movie) {
this.tab_film=this.m.listMovies()}
convertDuree(duree: number): string {
  const hours = Math.floor(duree / 60);
  const minutes = duree % 60;
  return `${hours}h ${minutes}min`;}

  suppFilm (f : Film) {
let rep = confirm("Etes-vous sûr de vouloir supprimer le film : "+f.titre+" ?");
if (rep) {
this.m.delMovie(f);
console.log("Suppression avec succes :"+f.titre)
}
}

}


