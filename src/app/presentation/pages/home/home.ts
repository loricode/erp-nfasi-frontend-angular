import { Component, inject } from '@angular/core';
import { AuthFacade } from '../../facades/auth.facade';
import { Navbar } from '../../components/navbar/navbar';
import { UserFacade } from '../../facades/user.facade';

@Component({
  selector: 'app-home',
  imports: [Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private userFacade = inject(UserFacade);

  modules = this.userFacade.getStateModules();

  ngOnInit(){
    this.userFacade.getModules();
  }

  goModule = (moduleName:string, moduleId:string, route:string) => {
    this.userFacade.goModule(moduleName, moduleId, route);
  }

}
