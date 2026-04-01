import { Injectable } from "@angular/core";
import { UserApiRepository } from "../../infrastructure/repositories/user-api.repository";

@Injectable({ providedIn: 'root' })
export class UserValidateUseCase {

    constructor(private repo: UserApiRepository){}

    execute(){
        return this.repo.validate();
    }
}