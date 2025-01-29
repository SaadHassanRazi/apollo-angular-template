import { HtmlParser } from '@angular/compiler';
import {
  Component,
  ElementRef,
  input,
  Input,
  TemplateRef,
} from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title: string;
  @Input() num: string;
  @Input() percentage: string;
  @Input() logo: string;
  @Input() color: string;

  @Input() set svgPic(value: string) {
    this._svgPic = this.sanitizer.bypassSecurityTrustHtml(value);
  }
  _svgPic: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}
}
