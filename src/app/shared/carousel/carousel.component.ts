import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
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
export class CarouselComponent {
  @Input() backgroundImages!: string[];
  @Input() thumbnailMode!: boolean;

  constructor(config: NgbCarouselConfig) {
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
