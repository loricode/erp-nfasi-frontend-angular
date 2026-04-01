import { Component, inject } from '@angular/core';
import { UserFacade } from '../../facades/user.facade';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private userFacade = inject(UserFacade);
  ngOnInit(){
    console.log("init")
    this.userFacade.validate();
  }


}
