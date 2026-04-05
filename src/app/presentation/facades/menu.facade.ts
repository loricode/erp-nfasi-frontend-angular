import { computed, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { submodules, toggleSubModule } from '../state/actions/auth.action';
import { MenuUseCase } from "../../application/use-cases/menu.usecase";
import { LocalStorageService } from "../../shared/services/utils/local-storage.service";
import { selectSubModules } from "../state/selectors/auth.selector";
import { Submodulo, Option } from "../../domain/models/menu/menu.model";


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

    getSubModules = (route: string) => {
        const modules = this.store.selectSignal(selectSubModules);

        return computed(() => {
            return modules().map((mod: Submodulo) => {
                
                const routeSegment = route.split("/").pop();
                const isActive = mod.options.some(
                    (opt: Option) => opt.route.split("/").pop() === routeSegment
                );
                
                return { ...mod, open: mod.open || isActive };
            });
        });

    }

    toggle(submoduleId: string) {
        this.store.dispatch(toggleSubModule({ submoduleId: submoduleId }));
    }

}