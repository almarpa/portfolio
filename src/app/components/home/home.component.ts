import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {FooterComponent} from '../../shared/footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {AboutComponent} from '../about/about.component';
import {SkillsComponent} from '../skills/skills.component';
import {ExperienceComponent} from '../experience/experience.component';
import {ProjectsComponent} from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('experience') experienceSection!: ElementRef;
  @ViewChild('skills') skillsSection!: ElementRef;
  @ViewChild('projects') projectsSection!: ElementRef;

  constructor() {}

  scroll(section: string) {
    const sections: {[key: string]: ElementRef} = {
      about: this.aboutSection,
      experience: this.experienceSection,
      skills: this.skillsSection,
      projects: this.projectsSection,
    };
    sections[section]?.nativeElement.scrollIntoView();
  }
}
