import { inject, Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { LoginUseCase } from "../../application/use-cases/login.usecase";
import { login } from '../state/actions/auth.action';
import { selectModules } from '../state/selectors/auth.selector';

@Injectable({ providedIn: 'root' })
export class AuthFacade {

    private router = inject(Router);

    constructor(
        private store: Store,
        private useCase: LoginUseCase
    ) { }

    login(email: string, password: string) {
        this.useCase.execute(email, password).subscribe({
            next: (response) => {
                this.store.dispatch(login(response));
                this.router.navigateByUrl('/home', { replaceUrl: true });
            }
        });

    }

    getModules = () => {

      return this.store.selectSignal(selectModules);

    }

}