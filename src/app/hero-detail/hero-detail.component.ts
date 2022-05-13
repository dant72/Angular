import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../Hero';
import { Heroes } from '../Heroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: Heroes,
    private location: Location
  ) {
    this.hero = this.getHero();

  }

  getHero(): Hero | undefined {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    return this.heroService.getHero(id);
  }

  goBack(): void {
    this.location.back();
  }

  public updateHero() {
    if (this.hero) {
      this.heroService.update(this.hero);
    }
  }
}
