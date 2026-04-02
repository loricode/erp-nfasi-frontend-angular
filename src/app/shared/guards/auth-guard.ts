import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserValidateUseCase } from '../../application/use-cases/userValidate.usecase';

export const authGuard: CanActivateFn = (route, state) => {
  const http = inject(HttpClient);
  const router = inject(Router);
  const useValidateUseCase = inject(UserValidateUseCase);
  return useValidateUseCase.execute().pipe(
    map(response => {
      if (response.valid) {
        return true;
      } else {
        router.navigate(['/']); 
        return false;
      }
    }),
    catchError(_ => {
      router.navigate(['/']);
      return of(false);
    })
  );
};