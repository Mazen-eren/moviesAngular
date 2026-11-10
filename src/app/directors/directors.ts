import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie } from '../services/movie';
import { Realisateur } from '../model/model-realisateur';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-directors',
  styleUrl: './directors.css',
  templateUrl: './directors.html',
})
export class Directors {
  tab_realiz: Realisateur[];

  constructor(private m: Movie) {
    this.tab_realiz = this.m.listrealiz();
  }

  suppRealiz(r: Realisateur) {
    let rep = confirm("Etes-vous sûr de vouloir supprimer le réalisateur : " + r.nom + " ?");
    if (rep) {
      this.m.delRealiz(r);
      console.log("Suppression avec succes :" + r.nom);
    }
  }

  convertDate(d: Date): string {
    if (!d) return '';
    const date = new Date(d);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
