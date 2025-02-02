import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ButtonModule } from 'primeng/button';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopbarComponent,
    SidebarComponent,
    CommonModule,
    ButtonModule,
    RightSidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('sidebarState', [
      state('open', style({ transform: 'translateX(0)', width: '280px' })),
      state(
        'closed',
        style({ transform: 'translateX(-100%)', display: 'none' })
      ),
      transition('closed => open', [animate('300ms ease-in-out')]),
      transition('open => closed', [animate('300ms ease-in-out')]),
    ]),
    trigger('mainContentState', [
      state('open', style({ marginLeft: '280px' })),
      state('closed', style({ margin: 0 })),
      transition('closed => open', [animate('300ms ease-in-out')]),
      transition('open => closed', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class AppComponent {
  navbarDisplay: boolean = true;

  constructor() {
    this.checkScreenSize();
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme') || 'lara-dark-blue';
    this.applyTheme(savedTheme);
  }

  applyTheme(themeName: string) {
    const themePath = `assets/themes/${themeName}/theme.css`;

    // Ensure <link id="theme-link"> exists in index.html
    let themeLink = document.getElementById('theme-link') as HTMLLinkElement;

    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.rel = 'stylesheet';
      themeLink.id = 'theme-link';
      document.head.appendChild(themeLink);
    }

    // Update theme path and prevent caching
    themeLink.href = `${themePath}?v=${Date.now()}`;
    localStorage.setItem('theme', themeName);
  }

  changeTheme(themeName: string) {
    this.applyTheme(themeName);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.navbarDisplay = window.innerWidth >= 768;
  }

  handleNavbarToggle(event: boolean) {
    this.navbarDisplay = event;
    console.log(this.navbarDisplay);
  }
}
