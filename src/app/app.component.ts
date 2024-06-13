import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  coverImages = [1, 4, 5];
  activeIndex = 'img0';

  constructor(private modalService: NgbModal) { }

  open(modal: any, index: number) {
    this.activeIndex = 'img' + index;
    this.modalService.open(modal, {
      centered: true,
      fullscreen: true
    });
  }
}
