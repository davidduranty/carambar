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
      const response = await fetch('https://carambar-h8vb.onrender.com/carambar/random');
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
