import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../domain/models/auth/auth.model';
import { LoginDto } from '../../domain/dtos/login.dto';
import { environment } from '../../../environments/environment.development';
import { Module } from '../../domain/models/module/module.model';

@Injectable({providedIn:'root'})
export class UserApiRepository {

    private http = inject(HttpClient);

    validate(): Observable<any> {
        return this.http.get(`${environment.apiUrlSecurity}/user/validate`);
    }

     getModules(userId:string): Observable<Module[]> {
        return this.http.get<Module[]>(`${environment.apiUrlSecurity}/user/module/${userId}`);
    }
}