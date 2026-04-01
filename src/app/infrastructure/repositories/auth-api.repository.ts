import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../domain/models/auth/auth.model';
import { LoginDto } from '../../domain/dtos/login.dto';
import { environment } from '../../../environments/environment.development';

@Injectable({providedIn:'root'})
export class AuthApiRepository {

    private http = inject(HttpClient);

    login(params: LoginDto): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${environment.apiUrlSecurity}/auth/login`, params);
    }
}