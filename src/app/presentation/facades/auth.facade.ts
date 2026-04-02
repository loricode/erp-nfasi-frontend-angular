import { inject, Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { LoginUseCase } from "../../application/use-cases/login.usecase";
import { login } from '../state/actions/auth.action';
import { selectModules } from '../state/selectors/auth.selector';
import { LocalStorageService } from "../../shared/services/utils/local-storage.service";

@Injectable({ providedIn: 'root' })
export class AuthFacade {

    private router = inject(Router);

    constructor(
        private store: Store,
        private useCase: LoginUseCase,
        private localStorageService: LocalStorageService
    ) { }

    login(email: string, password: string) {
        this.useCase.execute(email, password).subscribe({
            next: (response) => {
                this.localStorageService.setLogalStorage("token", response.token);
                this.localStorageService.setLogalStorage("userId", response.userId)
                this.store.dispatch(login(response));
                this.router.navigateByUrl('/home', { replaceUrl: true });
            }
        });
    }

}