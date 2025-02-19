import { Component } from '@angular/core';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { SimpleCardComponent } from '../../components/simple-card/simple-card.component';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { CircularChartComponent } from '../../components/circular-chart/circular-chart.component';
import { TableComponent } from '../../components/table/table.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { ScrollPanel, ScrollPanelModule } from 'primeng/scrollpanel';

interface Category {
  name: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    SimpleCardComponent,
    DropdownModule,
    ChartModule,
    FormsModule,
    CircularChartComponent,
    TableComponent,
    CardListComponent,
    ScrollPanelModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cities: Category[] | undefined;

  selectedCity: Category | undefined;
  data: any;

  options: any;

  ngOnInit() {
    this.cities = [{ name: 'Last Week' }, { name: 'This Week' }];
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: documentStyle.getPropertyValue('--purple-700'),
          borderColor: documentStyle.getPropertyValue('--purple-700'),
          data: [65, 59, 80, 81, 56, 55, 40],
          barThickness: 10,
          borderRadius: 10,
        },
        {
          label: 'My Second dataset',
          backgroundColor: documentStyle.getPropertyValue('--gray-500'),
          borderColor: documentStyle.getPropertyValue('--gray-500'),
          data: [28, 48, 40, 19, 86, 27, 90],

          barThickness: 10,
          borderRadius: 10,
        },
      ],
    };
    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  items = [
    {
      title: 'Sales',
      num: '120',
      percentage: '+12',
      color: 'green',
      logo: 'up',
      svgPic: `<svg width="100%" viewBox="0 0 258 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 93.9506L4.5641 94.3162C8.12821 94.6817 15.2564 95.4128 22.3846 89.6451C29.5128 83.8774 36.641 71.6109 43.7692 64.4063C50.8974 57.2018 58.0256 55.0592 65.1538 58.9268C72.2821 62.7945 79.4103 72.6725 86.5385 73.5441C93.6667 74.4157 100.795 66.2809 107.923 65.9287C115.051 65.5765 122.179 73.0068 129.308 66.8232C136.436 60.6396 143.564 40.8422 150.692 27.9257C157.821 15.0093 164.949 8.97393 172.077 6.43766C179.205 3.9014 186.333 4.86425 193.462 12.0629C200.59 19.2616 207.718 32.696 214.846 31.0487C221.974 29.4014 229.103 12.6723 236.231 5.64525C243.359 -1.38178 250.487 1.29325 254.051 2.63076L257.615 3.96827" stroke="10" style="stroke-width: 2px; stroke: var(--primary-color);"></path></svg>`,
    },
    {
      title: 'Revenue',
      num: '$4500',
      percentage: '+20',
      color: 'green',
      logo: 'up',
      svgPic: `<svg width="100%" viewBox="0 0 115 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 35.6498L2.24444 32.4319C3.48889 29.214 5.97778 22.7782 8.46667 20.3627C10.9556 17.9473 13.4444 19.5522 15.9333 21.7663C18.4222 23.9803 20.9111 26.8035 23.4 30.6606C25.8889 34.5176 28.3778 39.4085 30.8667 37.2137C33.3556 35.0189 35.8444 25.7383 38.3333 26.3765C40.8222 27.0146 43.3111 37.5714 45.8 38.9013C48.2889 40.2311 50.7778 32.3341 53.2667 31.692C55.7556 31.0499 58.2444 37.6628 60.7333 39.4617C63.2222 41.2607 65.7111 38.2458 68.2 34.9205C70.6889 31.5953 73.1778 27.9597 75.6667 23.5955C78.1556 19.2313 80.6444 14.1385 83.1333 13.8875C85.6222 13.6365 88.1111 18.2272 90.6 20.2425C93.0889 22.2578 95.5778 21.6977 98.0667 18.8159C100.556 15.9341 103.044 10.7306 105.533 7.37432C108.022 4.01806 110.511 2.50903 111.756 1.75451L113 1" style="stroke-width: 1px; stroke: var(--primary-color);"></path></svg>`,
    },
    {
      title: 'Visitors',
      num: '360',
      percentage: '+24',
      color: 'red',
      logo: 'down',
      svgPic: `<svg width="100%" viewBox="0 0 115 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L2.74444 2.61495C3.98889 4.2299 6.47778 7.4598 8.96667 9.07151C11.4556 10.6832 13.9444 10.6767 16.4333 11.6127C18.9222 12.5487 21.4111 14.4271 23.9 16.6724C26.3889 18.9178 28.8778 21.5301 31.3667 20.1977C33.8556 18.8652 36.3444 13.5878 38.8333 11.3638C41.3222 9.13969 43.8111 9.96891 46.3 11.9894C48.7889 14.0099 51.2778 17.2217 53.7667 16.2045C56.2556 15.1873 58.7444 9.9412 61.2333 11.2783C63.7222 12.6155 66.2111 20.5359 68.7 21.4684C71.1889 22.401 73.6778 16.3458 76.1667 16.0009C78.6556 15.6561 81.1444 21.0217 83.6333 24.2684C86.1222 27.515 88.6111 28.6428 91.1 27.4369C93.5889 26.2311 96.0778 22.6916 98.5667 22.7117C101.056 22.7317 103.544 26.3112 106.033 29.7859C108.522 33.2605 111.011 36.6302 112.256 38.3151L113.5 40" style="stroke-width: 1px; stroke: var(--pink-500);"></path></svg>`,
    },
    {
      title: 'Stock',
      num: '160',
      percentage: '+30',
      color: 'green',
      logo: 'up',
      svgPic: `<svg viewBox="0 0 100 100" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90" tabindex="-1" data-pc-section="svg" style="width: 90px; height: 90px;"><path class="p-knob-range" d="M 29.999999999999982 84.64101615137753 A 40 40 0 1 1 70 84.64101615137754" stroke-width="2" stroke="var(--surface-border, LightGray)"></path><path class="p-knob-value" d="M 29.999999999999982 84.64101615137753 A 40 40 0 1 1 84.64101615137756 69.99999999999997" stroke-width="2" stroke="var(--primary-color, Black)"></path><text text-anchor="middle" class="p-knob-text ng-star-inserted" x="50" y="57" fill="var(--text-color-secondary, Black)">90%</text><!----></svg>`,
    },
  ];
}
