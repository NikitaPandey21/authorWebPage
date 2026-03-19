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

export class HomeComponent implements OnInit, OnDestroy {
  // @ViewChild('carousel') carousel!: ElementRef;

  constructor(private modalService: NgbModal, private router: Router) {
   }

  coverImages: string[] = [ 
    '/assets/original/NP1.jpg',
    '/assets/original/NP3.png',
    '/assets/original/NP5.jpg',
    '/assets/original/BGQuote.png'
  ];

currentIndex = 0;
visibleImages: string[] = [];
isSliding = false;
intervalId: any; 

ngOnInit() {
    this.updateVisibleImages();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.slideNext();
    }, 3000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  onMouseEnter() {
  this.stopAutoSlide();   // pause on hover
}

  onMouseLeave() {
    this.startAutoSlide();  // resume when mouse leaves
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