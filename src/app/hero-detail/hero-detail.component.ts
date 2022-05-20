import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SingersService } from '../services/singers.service';
import { Singer } from '../Singer';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  singer: Singer | undefined;
  singers: Singer[] = [];

  constructor(
    private route: ActivatedRoute,
    private singersService: SingersService,
    private location: Location
  ) {
    this.singer = this.getSinter();
  }

  getSinter(): Singer | undefined {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);

    return this.singersService.getSinger(id);
  }

  goBack(): void {
    this.location.back();
  }
}
