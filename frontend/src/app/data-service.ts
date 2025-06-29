import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private model: Model | undefined

  async getDataRandom(): Promise<Model | undefined> {
    try {
      console.log("Appel API vers /carambar/random");
      const response = await fetch('https://carambar-backend-zm4k.onrender.com/carambar/random');
      if (response.ok) {
        this.model = await response.json();
        return this.model;
      } else {
        return undefined;
      }
    } catch (error) {
      throw new Error('Une erreur est survenue lors de la récupération de la blague.');
    }
  }
}
