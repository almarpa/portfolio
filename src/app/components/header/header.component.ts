import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {CarouselComponent} from '../../shared/carousel/carousel.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule, CarouselComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  @Input() greeting: string = '¡Hi there!';
  @Input() heading: string = 'I am Alejandro Marco Palomares';
  @Input() subHeading: string[] = [
    'Software Engineer',
    'Mobile Developer',
    'Web Developer',
    'Teamwork Enthusiast',
  ];

  carouselImages: string[] = [
    'assets/imgs/gallery_1.jpg',
    'assets/imgs/gallery_2.jpg',
    'assets/imgs/gallery_3.jpg',
    'assets/imgs/gallery_4.jpg',
  ];

  constructor() {}
}
