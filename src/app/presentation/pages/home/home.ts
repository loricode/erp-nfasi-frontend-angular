import { Component, inject } from '@angular/core';
import { AuthFacade } from '../../facades/auth.facade';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private auth = inject(AuthFacade);

  modules = this.auth.getModules();

  goModule = (moduleName:string, moduleId:string, route:string) => {
    this.auth.goModule(moduleName, moduleId, route);
  }

}
