import { Injectable } from '@angular/core';
import { Film } from '../model/model-film';
import { Realisateur } from '../model/model-realisateur';

@Injectable({ providedIn: 'root' })
export class Movie {
  tab_film: Film[];
  tab_realiz: Realisateur[] = [];

  constructor() {
    this.tab_film = [
      {
        id: 1,
        titre: 'The Odyssey',
        genre: 'Fantastique',
        dateSortie: new Date('07/15/2026'),
        duree: 172,
        note: 8.2,
        realiz: {
          num: 111,
          nom: 'Christopher Nolan',
          dateNaiss: new Date('07/30/1970'),
          pays: 'Angleterre',
        },
      },
      {
        id: 2,
        titre: 'Sahbek rajel',
        genre: 'Comédie',
        dateSortie: new Date('12/21/2024'),
        duree: 145,
        note: 5.8,
        realiz: { num: 444, nom: 'Kais Chekir', pays: 'Tunisie' },
      },
      {
        id: 3,
        titre: 'Marsupilami',
        genre: 'Comédie',
        dateSortie: new Date('02/04/2026'),
        duree: 99,
        note: 6.9,
        realiz: {
          num: 222,
          nom: 'Philippe Lacheau',
          dateNaiss: new Date('06/25/1980'),
          pays: 'France',
        },
      },
      {
        id: 4,
        titre: 'Haunting in Venice',
        genre: 'Policier',
        dateSortie: new Date('09/12/2023'),
        duree: 104,
        note: 7.9,
        realiz: {
          num: 333,
          nom: 'Kenneth Branagh',
          dateNaiss: new Date('12/10/1960'),
          pays: 'Angleterre',
        },
      },
      {
        id: 5,
        titre: 'Tenet',
        genre: 'Action',
        dateSortie: new Date('08/26/2020'),
        duree: 150,
        note: 8.5,
        realiz: {
          num: 111,
          nom: 'Christopher Nolan',
          dateNaiss: new Date('07/30/1970'),
          pays: 'Angleterre',
        },
      },
    ];

    this.tab_realiz = [
      {
        num: 111,
        nom: 'Christopher Nolan',
        dateNaiss: new Date('07/30/1970'),
        pays: 'Angleterre',
      },
      {
        num: 222,
        nom: 'Philippe Lacheau',
        dateNaiss: new Date('06/25/1980'),
        pays: 'France',
      },
      {
        num: 333,
        nom: 'Kenneth Branagh',
        dateNaiss: new Date('12/10/1960'),
        pays: 'Angleterre',
      },
      { num: 444, nom: 'Kais Chekir', pays: 'Tunisie' },
    ];
  }

  convertDuree(duree: number): string {
    const hours = Math.floor(duree / 60);
    const minutes = duree % 60;
    return `${hours}h ${minutes}min`;
  }

  listMovies(): Film[] {
    return this.tab_film;
  }

  addMovie(f: Film) {
    this.tab_film.push(f);
    console.log(f.titre, 'ajouté avec succès');
  }

  delMovie(f: Film) {
    const pos = this.tab_film.indexOf(f);
    if (pos > -1) {
      this.tab_film.splice(pos, 1);
      console.log(f.titre, 'supprimé avec succès');
    } else {
      console.log(f.titre, "n'existe pas dans la liste");
    }
  }

  viewMovie(i: number): Film {
    return this.tab_film.find((f) => f.id == i)!;
  }

  editMovie(f: Film) {
    this.delMovie(f);
    this.addMovie(f);
    this.tab_film.sort((a: Film, b: Film) => (a.id < b.id ? -1 : 1));
    console.log(
      'Succès de modification du film : ' +
        f.titre +
        ' ' +
        f.genre +
        ' ' +
        (f.realiz ? f.realiz.nom : '') +
        ' ' +
        f.dateSortie +
        ' ' +
        f.duree +
        'min ' +
        f.note +
        '/10'
    );
  }

  listrealiz(): Realisateur[] {
    return this.tab_realiz;
  }

  listRealiz(): Realisateur[] {
    return this.tab_realiz;
  }

  viewrealiz(i: number): Realisateur {
    return this.tab_realiz.find((r) => r.num == i)!;
  }

  viewRealiz(i: number): Realisateur {
    return this.tab_realiz.find((r) => r.num == i)!;
  }

  addRealiz(r: Realisateur) {
    this.tab_realiz.push(r);
    console.log(r.nom, 'ajouté avec succès');
  }

  delRealiz(r: Realisateur) {
    const pos = this.tab_realiz.indexOf(r);
    if (pos > -1) {
      this.tab_realiz.splice(pos, 1);
      console.log(r.nom, 'supprimé avec succès');
    } else {
      console.log(r.nom, "n'existe pas dans la liste");
    }
  }

  editRealiz(r: Realisateur) {
    this.delRealiz(r);
    this.addRealiz(r);
    this.tab_realiz.sort((a: Realisateur, b: Realisateur) =>
      a.num < b.num ? -1 : 1
    );
    console.log('modifié avec succès', r.nom, r.dateNaiss, r.pays);
  }
}
