import { createAction, props } from "@ngrx/store";
import { AuthResponse } from "../../../domain/models/auth/auth.model";
import { Submodulo } from "../../../domain/models/menu/menu.model";
import { Module } from "../../../domain/models/module/module.model";

export const login = createAction(
    '[Auth] Login Success',
    props<AuthResponse>()
);

export const modules = createAction(
    '[Auth] Modules Success',
    props<{ modules: Module[]}>()
);

export const submodules = createAction(
    '[Submodules] Submodules Success',
    props<{ submodules: Submodulo[]}>()
);

export const toggleSubModule = createAction(
  '[Submodules] Toggle SubModule',
  props<{ submoduleId: string }>()
);