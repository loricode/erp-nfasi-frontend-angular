import { createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/auth.action';

export interface AuthState {
    token: string | null;
    email: string | null;
    modules: Array<{ moduleId: string, moduleName: string, route: string, icon: string }>;
}

const initialState: AuthState = {
    email: null,
    modules: [],
    token: null
}

export const authReducer = createReducer(
    initialState,
    on(Actions.login, (state, { email, modules, token }) => ({
        ...state,
        email,
        modules,
        token,
    }))
);