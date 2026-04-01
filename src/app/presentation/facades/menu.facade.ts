import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { submodules, toggleSubModule } from '../state/actions/auth.action';
import { MenuUseCase } from "../../application/use-cases/menu.usecase";
import { LocalStorageService } from "../../shared/services/utils/local-storage.service";
import { selectSubModules } from "../state/selectors/auth.selector";


@Injectable({ providedIn: 'root' })
export class MenuFacade {

    constructor(
        private store: Store,
        private useCase: MenuUseCase,
        private localStorageService: LocalStorageService
    ) { }

    listSubModules(key: string) {

        const moduleId = this.localStorageService.getLocalStorage(key);

        this.useCase.execute(moduleId).subscribe({
            next: (response) => {

                const mapped = response.map(item => ({ ...item, open: false }));

                this.store.dispatch(submodules({ submodules: mapped }));
            }
        });
    }

    getSubModules = () => {
        return this.store.selectSignal(selectSubModules);
    }

    toggle(submoduleId: string) {
        this.store.dispatch(toggleSubModule({ submoduleId: submoduleId }));
    }

}