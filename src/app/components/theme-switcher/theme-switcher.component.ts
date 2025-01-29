import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [DropdownModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css',
})
export class ThemeSwitcherComponent {
  themes = [
    { name: 'Light Blue', value: 'lara-light-blue' },
    { name: 'Dark Blue', value: 'lara-dark-blue' },
    { name: 'Light Green', value: 'lara-light-green' },
  ];

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: string) {
    this.themeService.applyTheme(theme);
    console.log(`Theme selected: ${theme}`);
  }
  isDarkMode = false;

toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  const theme = this.isDarkMode ? 'lara-dark-blue' : 'lara-light-blue';
  this.themeService.applyTheme(theme);
}
}
