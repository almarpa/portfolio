import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {FooterComponent} from '../../shared/footer/footer.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('experience') experienceSection!: ElementRef;
  @ViewChild('skills') skillsSection!: ElementRef;
  @ViewChild('projects') projectsSection!: ElementRef;

  constructor() {}

  scroll(section: String) {
    if (section == 'about') {
      this.aboutSection.nativeElement.scrollIntoView();
    } else if (section == 'experience') {
      this.experienceSection.nativeElement.scrollIntoView();
    } else if (section == 'skills') {
      this.skillsSection.nativeElement.scrollIntoView();
    } else if (section == 'projects') {
      this.projectsSection.nativeElement.scrollIntoView();
    }
  }
}
