import {Injectable, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isBrowser: boolean;
  private darkMode = new BehaviorSubject<boolean>(true); // default to dark mode
  darkMode$ = this.darkMode.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      const stored = localStorage.getItem('theme');
      if (stored) {
        this.setDarkMode(stored === 'dark');
      } else {
        this.setDarkMode(true);
      }
    }
  }

  isDarkMode(): boolean {
    return this.darkMode.value;
  }

  toggleTheme() {
    this.setDarkMode(!this.darkMode.value);
  }

  setDarkMode(isDark: boolean) {
    this.darkMode.next(isDark);
    if (this.isBrowser) {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      const root = document.documentElement;
      root.classList.toggle('dark-mode', isDark);
      root.classList.toggle('light-mode', !isDark);
      root.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
    }
  }
}
