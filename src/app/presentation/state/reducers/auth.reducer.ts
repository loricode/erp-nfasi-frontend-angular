import { createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/auth.action';
import { Submodulo } from '../../../domain/models/menu/menu.model';

interface Option {
    optionId: string;
    optionName: string;
}

export interface AuthState {
    token: string | null;
    email: string | null;
    modules: Array<{ moduleId: string, moduleName: string, route: string, icon: string }>;
    submodules:Array<Submodulo>
}

const initialState: AuthState = {
    email: null,
    modules: [],
    token: null,
    submodules:[]
}

export const authReducer = createReducer(
    initialState,
    on(Actions.login, (state, { email, modules, token }) => ({
        ...state,
        email,
        modules,
        token,
    })),

     on(Actions.submodules, (state, {submodules}) => ({
        ...state,
       submodules
    })),

    on(Actions.toggleSubModule, (state, { submoduleId }) => ({
  ...state,
     submodules: state.submodules.map(m =>
    m.submoduleId === submoduleId ? { ...m, open: !m.open } : m
  )
   }))
);