import { Component, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  inventoryStatus: string;
  rating: number;
  image: string;
}

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent implements OnInit {
  products: Product[] = [];

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        category: 'Category 1',
        price: 100,
        inventoryStatus: 'INSTOCK',
        rating: 4.5,
        image: 'bamboo-watch.jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        category: 'Category 2',
        price: 150,
        inventoryStatus: 'LOWSTOCK',
        rating: 3.8,
        image: 'blue-t-shirt.jpg',
      },
      {
        id: 3,
        name: 'Product 3',
        category: 'Category 3',
        price: 200,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4.2,
        image: 'game-controller.jpg',
      },
      {
        id: 4,
        name: 'Product 4',
        category: 'Category 4',
        price: 250,
        inventoryStatus: 'INSTOCK',
        rating: 4.7,
        image: 'gaming-set.jpg',
      },
      {
        id: 5,
        name: 'Product 5',
        category: 'Category 5',
        price: 300,
        inventoryStatus: 'LOWSTOCK',
        rating: 4.0,
        image: 'headphones.jpg',
      },
    ];
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return null;
    }
  }
}
