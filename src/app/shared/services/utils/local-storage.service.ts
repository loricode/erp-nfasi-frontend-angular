import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  

  public setLogalStorage(key:string, value:string):void {
     window.localStorage.setItem(key, value);
  }

  public getLocalStorage(key:string): string {
    return window.localStorage.getItem(key) || '';
  }

}
