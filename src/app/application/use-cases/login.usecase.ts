import { Injectable } from "@angular/core";
import { AuthApiRepository } from "../../infrastructure/repositories/auth-api.repository";

@Injectable({ providedIn: 'root' })
export class LoginUseCase {

    constructor(private repo: AuthApiRepository){}

    execute(email:string, password:string){
        return this.repo.login({email, password});
    }
}