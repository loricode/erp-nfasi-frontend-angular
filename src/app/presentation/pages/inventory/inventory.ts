import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-inventory',
  imports: [RouterOutlet, Navbar, Sidebar],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})
export class Inventory {

}
