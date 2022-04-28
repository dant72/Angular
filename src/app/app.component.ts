import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private date = new Date();
  private day = 60 * 60 * 24 * 1000;
  title = this.date.toLocaleDateString();
  date1 = new Date(Date.now() + this.day).toLocaleDateString();
  date2 = new Date(Date.now() + 4 * this.day).toLocaleDateString();
  date3 = new Date(Date.now() + 7 * this.day).toLocaleDateString();
  date4 = new Date(Date.now() + 8 * this.day).toLocaleDateString();
}
