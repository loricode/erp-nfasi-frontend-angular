import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inventory } from './inventory';

const routes: Routes = [{
  path:'',
  component: Inventory,
  children:[
    {
      path:'',
      loadComponent: () => import('./home/home').then(p => p.Home)

    },
    {
      path:'consultProduct',
      loadComponent: () => import('./product-page/product-page').then(p => p.ProductPage)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRouting { }
