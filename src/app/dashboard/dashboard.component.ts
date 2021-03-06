import { Component } from '@angular/core';
import { Hero } from '../Hero';
import { Heroes } from '../Heroes'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent{

  heroes: Heroes;

  constructor(private heroService: Heroes) {
    this.heroes = heroService;
  }

  public getHeroes(): Hero[] {
    return this.heroes.getHeroes();
  }
}
