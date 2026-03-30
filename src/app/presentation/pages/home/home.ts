import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../../facades/auth.facade';

import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private auth = inject(AuthFacade);

  modules = this.auth.getModules();

}
