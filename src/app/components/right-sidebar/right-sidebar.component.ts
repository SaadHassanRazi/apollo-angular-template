import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ThemeSwitcherComponent } from "../theme-switcher/theme-switcher.component";

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [ButtonModule, SidebarModule, ThemeSwitcherComponent],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css',
})
export class RightSidebarComponent {
  sidebarVisible: boolean = false;
}
