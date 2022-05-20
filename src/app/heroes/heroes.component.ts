import { Component } from '@angular/core';
import { SingersService } from '../services/singers.service';
import { Singer } from '../Singer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  public singer: Singer | undefined;
  public singers: Singer[] = [];

  constructor(private singersService: SingersService) 
  {
    this.singersService.getSingers().subscribe(data => this.singers = data);
  }

  public Click(singer: Singer) {
    this.singer = singer;
  }
}
