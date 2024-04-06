import {Component, Input} from '@angular/core';
import {Project} from './project';
import {CarouselComponent} from '../../../shared/carousel/carousel.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() project!: Project;
  constructor() {}
}
