import { Realisateur } from "./model-realisateur";

export class Film {
   id!: number;
   titre!: string;
   genre!: string;
   realiz!: Realisateur;
   dateSortie!: Date;
   duree!: number;
   note!: number;
}