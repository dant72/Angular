import { Injectable } from '@angular/core';
import { Hero } from './Hero';

@Injectable()
export class Heroes {
  static id: number = 1;
  heroes: Hero[] = [];


  constructor() {
    this.add("Adam");
    this.add("Tom");
    this.add("Boris");
    this.add("Tomson");
    this.add("Bob");
    this.add("Rob");
  }

  public add(name: string) : void {
    this.heroes.push(new Hero(Heroes.id++, name));
  }

  public getHeroes(): Hero[] {
    return this.heroes;
  }

  public getHero(id: number): Hero | undefined {
    return this.heroes.find(i => i.id == id);
  }

  public update(hero: Hero) {
    this.heroes.find(i => i.id == hero.id)?.setName(hero.name);
  }
}
