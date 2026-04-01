import { Component, inject } from '@angular/core';
import { MenuFacade } from '../../facades/menu.facade';

interface MenuItem {
  icon?: string;
  open?: boolean;
  submoduleId: string;
  submoduleName: string;
  options: Array<{optionId:string, optionName:string}>;
}

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  
  private menuFacade = inject(MenuFacade);

  subModules = this.menuFacade.getSubModules();

  toggle(item: MenuItem) {
   this.menuFacade.toggle(item.submoduleId);
  }
}
