import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import { MenuFacade } from '../../facades/menu.facade';

@Component({
  selector: 'app-inventory',
  imports: [RouterOutlet, Navbar, Sidebar],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory {
 
  menuFacade =  inject(MenuFacade);

   ngOnInit(): void {
    this.menuFacade.listSubModules("inventario");
  }
 
}
