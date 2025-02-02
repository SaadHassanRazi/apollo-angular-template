import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeLink: HTMLLinkElement | null = null;

  constructor() {
    this.initTheme();
  }

  private initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'lara-light-blue';
    this.applyTheme(savedTheme);
  }

  applyTheme(themeName: string) {
    const themePath = `assets/themes/${themeName}/theme.css`; // Corrected theme path
    console.log(`Applying theme: ${themePath}`);

    if (!this.themeLink) {
      this.themeLink = document.getElementById('theme-link') as HTMLLinkElement;

      if (!this.themeLink) {
        this.themeLink = document.createElement('link');
        this.themeLink.rel = 'stylesheet';
        this.themeLink.id = 'theme-link';
        document.head.appendChild(this.themeLink);
      }
    }

    this.themeLink.href = `${themePath}?v=${Date.now()}`; // Prevent caching
    localStorage.setItem('theme', themeName);
  }
}
