import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  portfolioImages = [
    'NP1.jpg', 'NP2.jpg', 'NP3.jpg', 'NP4.jpg',
    'NP5.jpg', 'NP6.jpg', 'NP7.jpg', 'NP8.jpg'
  ];
}
