import { Component, inject, Input } from '@angular/core';
import { MenuFacade } from '../../facades/menu.facade';
import { Submodulo } from '../../../domain/models/menu/menu.model';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [NgClass],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  @Input("titleMenu") titleMenu = '';
  
  private menuFacade = inject(MenuFacade);
  private router = inject(Router);

  subModules = this.menuFacade.getSubModules(this.router.url);

  toggle = (item: Submodulo) => {
   this.menuFacade.toggle(item.submoduleId);
  }

  goOption = (route:string) => {
    this.router.navigateByUrl(route);
  }

  isActive(route: string) {
    return this.router.url.includes(route);
  }


}
