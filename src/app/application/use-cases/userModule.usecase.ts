import { Injectable } from "@angular/core";
import { UserApiRepository } from "../../infrastructure/repositories/user-api.repository";

@Injectable({ providedIn: 'root' })
export class UserModuleUseCase {

    constructor(private repo: UserApiRepository){}

    execute(userId:string){
        return this.repo.getModules(userId);
    }
}