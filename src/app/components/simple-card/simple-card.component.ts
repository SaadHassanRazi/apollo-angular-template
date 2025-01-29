import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-simple-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './simple-card.component.html',
  styleUrl: './simple-card.component.css',
})
export class SimpleCardComponent {
  @Input() title: string;
  
}
