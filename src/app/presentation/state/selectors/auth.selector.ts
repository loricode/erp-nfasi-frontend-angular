import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

// selecciona el slice "auth"
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// selectores específicos
export const selectToken = createSelector(
  selectAuthState,
  (state) => state.token
);

export const selectEmail = createSelector(
  selectAuthState,
  (state) => state.email
);

export const selectModules = createSelector(
  selectAuthState,
  (state) => state.modules
);