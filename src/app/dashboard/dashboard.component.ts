import { Component, OnInit } from '@angular/core';
import { SingersService } from '../services/singers.service';
import { Singer } from '../Singer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{

  public singers: Array<Singer>;

  constructor(private singersService: SingersService) {
  }

  ngOnInit() {

    this.singersService.getSingers().subscribe(data => {
      this.singers = data;
      console.log(data);
    });
  }

  public getSingers(): Singer[] {
    return this.singers;
  }
}
