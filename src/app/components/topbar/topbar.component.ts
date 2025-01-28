import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    AvatarModule,
    InputTextModule,
    ToolbarModule,
  ],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  @Output() navbarEventEmitter = new EventEmitter<boolean>();
  private isNavbarVisible: boolean = true;

  MenuClickHandler() {
    this.isNavbarVisible = !this.isNavbarVisible;
    this.navbarEventEmitter.emit(this.isNavbarVisible);
  }
}
