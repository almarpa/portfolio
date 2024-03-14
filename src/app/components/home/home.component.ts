import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {FooterComponent} from '../../shared/footer/footer.component';
import {HeaderComponent} from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('experience') experienceSection!: ElementRef;
  @ViewChild('skills') skillsSection!: ElementRef;
  @ViewChild('projects') projectsSection!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  scroll(section: String) {
    if (section == 'about') {
      this.aboutSection.nativeElement.scrollIntoView({behavior: 'smooth'});
    } else if (section == 'experience') {
      this.experienceSection.nativeElement.scrollIntoView({behavior: 'smooth'});
    } else if (section == 'skills') {
      this.skillsSection.nativeElement.scrollIntoView({behavior: 'smooth'});
    } else if (section == 'experience') {
      this.projectsSection.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }
}
