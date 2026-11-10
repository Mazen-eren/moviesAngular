import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../services/movie';
import { Realisateur } from '../model/model-realisateur';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-add-director',
  styles: ``,
  templateUrl: './add-director.html',
})
export class AddDirector {
  newRealiz: Realisateur = new Realisateur();

  constructor(private m: Movie, private rout: Router) {}

  ajouterRealiz() {
    this.m.addRealiz(this.newRealiz);
    this.rout.navigate(['directors']);
  }
}
