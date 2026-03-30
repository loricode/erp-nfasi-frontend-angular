import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren: () => import('./presentation/pages/auth/auth-routing').then(m => m.AuthRouting),
    },
    {
        path:'home',
        loadComponent: () => import('./presentation/pages/home/home').then(c => c.Home),
    },
    {
        path:'inventory',
        loadChildren: () => import('./presentation/pages/inventory/inventory-routing').then(m => m.InventoryRouting),
    }
];
