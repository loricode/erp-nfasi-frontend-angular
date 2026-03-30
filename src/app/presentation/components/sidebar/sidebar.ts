import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  open?: boolean;
  children: {
    label: string;
    route: string;
  }[];
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menu = signal<MenuItem[]>([
    {
      label: 'Inventario',
      icon: 'fas fa-boxes',
      open: false,
      children: [
        { label: 'Productos', route: '/productos' },
        { label: 'Categorías', route: '/categorias' }
      ]
    },
    {
      label: 'Seguridad',
      icon: 'fas fa-shield-alt',
      open: false,
      children: [
        { label: 'Usuarios', route: '/usuarios' },
        { label: 'Roles', route: '/roles' }
      ]
    },
    {
      label: 'Reportes',
      icon: 'fas fa-chart-line',
      open: false,
      children: [
        { label: 'Ventas', route: '/ventas' },
        { label: 'Inventario', route: '/reporte-inventario' }
      ]
    },
     {
      label: 'Reportes2',
      icon: 'fas fa-chart-line',
      open: false,
      children: [
        { label: 'Ventas', route: '/ventas' },
        { label: 'Inventario', route: '/reporte-inventario' }
      ]
    },
     {
      label: 'Reportes3',
      icon: 'fas fa-chart-line',
      open: false,
      children: [
        { label: 'Ventas', route: '/ventas' },
        { label: 'Inventario', route: '/reporte-inventario' }
      ]
    },
     {
      label: 'Reportes4',
      icon: 'fas fa-chart-line',
      open: false,
      children: [
        { label: 'Ventas', route: '/ventas' },
        { label: 'Inventario', route: '/reporte-inventario' }
      ]
    }

  ]);

  toggle(item: MenuItem) {
    item.open = !item.open;
    this.menu.update(m => [...m]);
  }
}
