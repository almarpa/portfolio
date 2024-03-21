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
  @Input() greeting: string = '¡Hi!';
  @Input() heading: string = "I'm Alejandro Marco Palomares";
  @Input() subHeading: string[] = [
    'Software Engineer',
    'Android Development',
    'Web Development',
    'Teamwork Enthusiast',
  ];

  constructor() {}
}
