import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-circular-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './circular-chart.component.html',
  styleUrl: './circular-chart.component.css',
})
export class CircularChartComponent {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue('--purple-500'),
            documentStyle.getPropertyValue('--purple-700'),
            documentStyle.getPropertyValue('--purple-100'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--purple-500'),
            documentStyle.getPropertyValue('--purple-700'),
            documentStyle.getPropertyValue('--purple-100'),
          ],
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }
}
