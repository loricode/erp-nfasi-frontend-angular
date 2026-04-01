import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { MenuDto } from '../../domain/dtos/menu.dto';
import { MenuResponse } from '../../domain/models/menu/menu.model';

@Injectable({providedIn:'root'})
export class MenuApiRepository {

    private http = inject(HttpClient);

    listSubModules(params: MenuDto): Observable<MenuResponse[]> {
        return this.http.post<MenuResponse[]>(`${environment.apiUrlCore}/menu/submodules`, params);
    }
}