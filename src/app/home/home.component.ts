// import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AfterViewInit, Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html'
// })

export class HomeComponent{
  // @ViewChild('carousel') carousel!: ElementRef;

  constructor(private modalService: NgbModal, private router: Router) {
   }

  coverImages: string[] = [ 
    '/assets/original/NP1.jpg',
    '/assets/original/NP2.png',
    '/assets/original/NP3.png',
    '/assets/original/NP4.jpg',
    '/assets/original/NP5.jpg'
  ];

currentIndex = 0;
visibleImages: string[] = [];
isSliding = false;

ngOnInit() {
  this.updateVisibleImages();

  setInterval(() => {
    this.slideNext();
  }, 3000);
}

updateVisibleImages() {
  const prev =
    (this.currentIndex - 1 + this.coverImages.length) % this.coverImages.length;
  const next =
    (this.currentIndex + 1) % this.coverImages.length;

  this.visibleImages = [
    this.coverImages[prev],
    this.coverImages[this.currentIndex],
    this.coverImages[next]
  ];
}

slideNext() {
  this.isSliding = true;

  // Wait for slide-out animation
  setTimeout(() => {
    this.currentIndex =
      (this.currentIndex + 1) % this.coverImages.length;
    this.updateVisibleImages();
    this.isSliding = false;
  }, 400); // 👈 MUST match CSS timing
}



  goToBook(slug: string) {
    this.router.navigate(['/books'], { fragment: slug });
  }
}


// export class HomeComponent {

//   // constructor(private router: Router) {}

//   coverImages = [
//       'NP1.jpg','NP4.jpg','NP5.jpg'
//     ];
//     // coverImages = [1, 4, 5];
//     // activeIndex = 'img0';
  
//   constructor(private modalService: NgbModal, private router: Router) {
//     console.log("constructor")
//    }
  
//   open(modal: any) {
//     // this.activeIndex = 'img' + index;
//     console.log("img")
//     this.modalService.open(modal, {
//       centered: true,
//       fullscreen: true
//     });
//   }
  
//   goToBook(slug: string) {
//     this.router.navigate(['/books'], { fragment: slug });
//   }

// }
