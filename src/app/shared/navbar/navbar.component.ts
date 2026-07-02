import {Component, Output, EventEmitter, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import {IconsModule} from '../../icons/icons.module';
import {ThemeService} from '../theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, NgbCollapse, IconsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuCollapsed = true;
  isScrolled = false;

  @Output()
  public menuSelected = new EventEmitter<string>();

  constructor(private themeService: ThemeService) {}

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  public handleClick(menuSelected: MouseEvent) {
    this.isMenuCollapsed = true;
    this.menuSelected.emit((menuSelected.target as HTMLElement).id);
  }
}
