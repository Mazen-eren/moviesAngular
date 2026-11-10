import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Movie } from '../services/movie';
import { Realisateur } from '../model/model-realisateur';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-update-director',
  styles: ``,
  templateUrl: './update-director.html',
})
export class UpdateDirector {
  realizCourant: Realisateur;

  constructor(private actRoute: ActivatedRoute, private rout: Router, private m: Movie) {
    this.realizCourant = this.m.viewrealiz(this.actRoute.snapshot.params['num']);
  }

  modifRealiz() {
    this.m.editRealiz(this.realizCourant);
    this.rout.navigate(['directors']);
  }
}
