import { Injectable } from "@angular/core";
import { MenuApiRepository } from "../../infrastructure/repositories/menu-api.repository";

@Injectable({ providedIn: 'root' })
export class MenuUseCase {

    constructor(private repo: MenuApiRepository){}

    execute(moduleId:string){
        return this.repo.listSubModules({moduleId});
    }
}