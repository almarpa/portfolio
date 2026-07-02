import {CommonModule, isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {NgbCarouselConfig, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel.component.html',
  styleUrls: ['carousel.component.scss'],
  providers: [NgbCarouselConfig],
})
export class CarouselComponent implements OnInit {
  @Input() backgroundImages!: string[];
  @Input() thumbnailMode!: boolean;

  constructor(
    config: NgbCarouselConfig,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && this.backgroundImages) {
      this.backgroundImages.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    }
  }
}
