import { Component, inject, OnInit } from '@angular/core';

import { Model } from './model';
import { DataService } from './data-service';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'carambar';
  models: Model | undefined;

  private dataService = inject(DataService);
  voirReponse = false;
  ngOnInit(): void {
    this.change();
  }
  change() {
    this.dataService.getDataRandom().then((model) => {
      this.models = model;
    });
  }

}
