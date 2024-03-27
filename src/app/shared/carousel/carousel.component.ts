import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {NgbCarouselConfig, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['carousel.component.scss'],
  providers: [NgbCarouselConfig],
})
export class CarouselComponent {
  backgroundImages: string[] = [
    './assets/imgs/gallery_1.jpg',
    './assets/imgs/gallery_2.jpg',
    './assets/imgs/gallery_3.jpg',
    './assets/imgs/gallery_4.jpg',
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 7000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
  }
}
