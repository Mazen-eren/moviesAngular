import { Routes } from '@angular/router';
import { Films } from './films/films';
import { AddFilm } from './add-film/add-film';
import { UpdateFilm } from './update-film/update-film';
import { SearchFilm } from './search-film/search-film';
import { Directors } from './directors/directors';
import { AddDirector } from './add-director/add-director';
import { UpdateDirector } from './update-director/update-director';

export const routes: Routes = [
  { path: 'films', title: 'Liste des films', component: Films },
  { path: 'add-film', title: "Ajout d'un film", component: AddFilm },
  { path: 'search-film', title: 'Recherche de films', component: SearchFilm },
  { path: 'updateFilm/:id', title: "Modification d'un film", component: UpdateFilm },
  { path: 'directors', title: 'Liste des réalisateurs', component: Directors },
  { path: 'add-director', title: "Ajout d'un réalisateur", component: AddDirector },
  { path: 'updateDirector/:num', title: "Modification d'un réalisateur", component: UpdateDirector },
  { path: '', redirectTo: '/films', pathMatch: 'full' },
];
