import { Component, OnInit } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

// Add type for severity
type Severity =
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'secondary'
  | 'contrast';

interface Country {
  name: string;
  code: string;
}

interface Representative {
  name: string;
  image: string;
}

interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: Date;
  status?: string;
  representative?: Representative;
  verified?: boolean;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    HttpClientModule,
    CommonModule,
    ButtonModule,
    FormsModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  customers!: Customer[];
  representatives!: Representative[];
  statuses!: any[];
  loading: boolean = true;
  activityValues: number[] = [0, 100];

  constructor() {}

  ngOnInit() {
    // Dummy data
    this.customers = [
      {
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz',
        },
        company: 'Benton, John B Jr',
        date: new Date(2015, 0, 4),
        status: 'unqualified',
        verified: true,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png',
        },
      },
      {
        id: 1001,
        name: 'Josephine Darakjy',
        country: {
          name: 'Egypt',
          code: 'eg',
        },
        company: 'Chanay, Jeffrey A Esq',
        date: new Date(2019, 2, 13),
        status: 'proposal',
        verified: true,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png',
        },
      },
      {
        id: 1002,
        name: 'Art Venere',
        country: {
          name: 'Panama',
          code: 'pa',
        },
        company: 'Chemel, James L Cpa',
        date: new Date(2017, 11, 18),
        status: 'qualified',
        verified: false,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png',
        },
      },
      {
        id: 1003,
        name: 'Lenna Paprocki',
        country: {
          name: 'Slovenia',
          code: 'si',
        },
        company: 'Feltz Printing Service',
        date: new Date(2020, 9, 15),
        status: 'new',
        verified: true,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png',
        },
      },
      {
        id: 1004,
        name: 'Donette Foller',
        country: {
          name: 'South Africa',
          code: 'za',
        },
        company: 'Printing Dimensions',
        date: new Date(2016, 5, 20),
        status: 'proposal',
        verified: true,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png',
        },
      },
      {
        id: 1005,
        name: 'Simona Morasca',
        country: {
          name: 'Canada',
          code: 'ca',
        },
        company: 'Chapman, Ross E Esq',
        date: new Date(2018, 7, 19),
        status: 'qualified',
        verified: false,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png',
        },
      },
      {
        id: 1006,
        name: 'Mitsue Tollner',
        country: {
          name: 'Japan',
          code: 'jp',
        },
        company: 'Morlong Associates',
        date: new Date(2018, 4, 19),
        status: 'renewal',
        verified: true,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png',
        },
      },
      {
        id: 1007,
        name: 'Leota Dilliard',
        country: {
          name: 'Serbia',
          code: 'rs',
        },
        company: 'Commercial Press',
        date: new Date(2019, 8, 13),
        status: 'renewal',
        verified: true,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png',
        },
      },
      {
        id: 1008,
        name: 'Sage Wieser',
        country: {
          name: 'Germany',
          code: 'de',
        },
        company: 'Truhlar And Truhlar Attys',
        date: new Date(2018, 5, 20),
        status: 'unqualified',
        verified: true,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png',
        },
      },
      {
        id: 1009,
        name: 'Kris Marrier',
        country: {
          name: 'Mexico',
          code: 'mx',
        },
        company: 'King, Christopher A Esq',
        date: new Date(2015, 7, 1),
        status: 'proposal',
        verified: false,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png',
        },
      },
      {
        id: 1010,
        name: 'Minna Amigon',
        country: {
          name: 'Romania',
          code: 'ro',
        },
        company: 'Dorl, James J Esq',
        date: new Date(2018, 11, 7),
        status: 'qualified',
        verified: false,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png',
        },
      },
      {
        id: 1011,
        name: 'Abel Maclead',
        country: {
          name: 'Singapore',
          code: 'sg',
        },
        company: 'Rangoni Of Florence',
        date: new Date(2017, 3, 17),
        status: 'qualified',
        verified: true,
        representative: {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png',
        },
      },
      {
        id: 1012,
        name: 'Kiley Caldarera',
        country: {
          name: 'Serbia',
          code: 'rs',
        },
        company: 'Feiner Bros',
        date: new Date(2015, 10, 20),
        status: 'unqualified',
        verified: false,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png',
        },
      },
      {
        id: 1013,
        name: 'Graciela Ruta',
        country: {
          name: 'Chile',
          code: 'cl',
        },
        company: 'Buckley Miller & Wright',
        date: new Date(2016, 7, 25),
        status: 'negotiation',
        verified: false,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png',
        },
      },
      {
        id: 1014,
        name: 'Cammy Albares',
        country: {
          name: 'Philippines',
          code: 'ph',
        },
        company: 'Rousseaux, Michael Esq',
        date: new Date(2019, 6, 24),
        status: 'new',
        verified: true,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png',
        },
      },
    ];

    // Rest of your initialization code remains the same
    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];

    this.loading = false;
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(status: string): Severity {
    switch (status.toLowerCase()) {
      case 'unqualified':
        return 'danger';
      case 'qualified':
        return 'success';
      case 'new':
        return 'info';
      case 'negotiation':
        return 'warning';
      case 'renewal':
        return 'success';
      case 'proposal':
        return 'info';
      default:
        return 'secondary';
    }
  }

  onGlobalFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    return filterValue;
  }
}
