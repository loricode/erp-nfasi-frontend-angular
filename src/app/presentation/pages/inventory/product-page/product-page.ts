import { Component } from '@angular/core';
import { ModalComponent } from '../../../components/modal/modal.component';

@Component({
  selector: 'app-product-page',
  imports: [ModalComponent],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {

  isModalOpen = true;


  productos = [
  { nombre: 'Laptop Dell XPS 15', precio: '$1,500', categoria:"tecnologia", estado:'activo' },
  { nombre: 'iPhone 14 Pro', precio: '$999', categoria:"tecnologia", estado:'activo' },
  { nombre: 'Samsung Galaxy Tab S8', precio: '$650', categoria:"tecnologia", estado:'activo',  }
];

}
