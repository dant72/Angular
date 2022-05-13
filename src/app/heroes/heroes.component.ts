import { Component } from '@angular/core';
import { Hero } from '../Hero';
import { Heroes } from '../Heroes'

@Component({
  selector: 'app-dashboard',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Heroes;
  currentHero: Hero | undefined;

  constructor(private heroService: Heroes) {
    this.heroes = heroService;
  }

  public getHeroes(): Hero[] {
    return this.heroes.getHeroes();
  }

  public Click(hero: Hero) {
    this.currentHero = hero;
  }
}
