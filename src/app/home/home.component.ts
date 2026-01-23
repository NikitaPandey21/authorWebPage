import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // constructor(private router: Router) {}

  coverImages = [
      'NP1.jpg','NP4.jpg','NP5.jpg'
    ];
    // coverImages = [1, 4, 5];
    // activeIndex = 'img0';
  
  constructor(private modalService: NgbModal, private router: Router) {
    console.log("constructor")
   }
  
  open(modal: any) {
    // this.activeIndex = 'img' + index;
    console.log("img")
    this.modalService.open(modal, {
      centered: true,
      fullscreen: true
    });
  }
  
  goToBook(bookId: string) {
    console.log('books')
    this.router.navigate(['/book', bookId]);
  }
}
