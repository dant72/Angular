import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { Heroes } from '../Heroes'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Heroes;

  constructor(private heroService: Heroes) {
    this.heroes = heroService;
  }

  ngOnInit(): void {
  }

  public getHeroes(): Hero[] {
    return this.heroes.getHeroes();
  }
}
