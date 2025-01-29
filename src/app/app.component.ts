import { Component, HostListener, Input } from '@angular/core';
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
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';

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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    // Set navbarDisplay to false if screen width is less than 768px (or any other breakpoint)
    this.navbarDisplay = window.innerWidth >= 768;
  }

  handleNavbarToggle(event: boolean) {
    this.navbarDisplay = event;
    console.log(this.navbarDisplay);
  }
}
