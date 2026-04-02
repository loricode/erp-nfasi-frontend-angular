import { inject, Injectable } from "@angular/core";
import { UserValidateUseCase } from "../../application/use-cases/userValidate.usecase";
import { UserModuleUseCase } from "../../application/use-cases/userModule.usecase";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { modules } from "../state/actions/auth.action";
import { selectModules } from "../state/selectors/auth.selector";
import { LocalStorageService } from "../../shared/services/utils/local-storage.service";

@Injectable({ providedIn: 'root' })
export class UserFacade {

    private userValidateUseCase = inject(UserValidateUseCase);
    private userModuleUseCase = inject(UserModuleUseCase);
    private localStorageService = inject(LocalStorageService);
    private router = inject(Router);
    private store = inject(Store);

    getModules = () => {

        const userId = this.localStorageService.getLocalStorage("userId");

        this.userModuleUseCase.execute(userId).subscribe({
            next: (response) => {
                this.store.dispatch(modules({ modules: response }));
            }
        })
    }

     validate = () => {
        this.userValidateUseCase.execute().subscribe({
            next: (response) => {
                if (!response.valid) {
                    this.router.navigateByUrl("/", { replaceUrl: true });
                }
            }
        });
    }

     goModule = (key:string, value:string, route:string) => {
        this.localStorageService.setLogalStorage(key, value);
        this.router.navigateByUrl(route);
    }

     getStateModules = () => {
      return this.store.selectSignal(selectModules);
    }

}