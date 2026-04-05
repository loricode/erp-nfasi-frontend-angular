import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {

  productos = [
  { nombre: 'Laptop Dell XPS 15', precio: '$1,500', categoria:"tecnologia", estado:'activo' },
  { nombre: 'iPhone 14 Pro', precio: '$999', categoria:"tecnologia", estado:'activo' },
  { nombre: 'Samsung Galaxy Tab S8', precio: '$650', categoria:"tecnologia", estado:'activo' }
];

}
