import { createAction, props } from "@ngrx/store";
import { AuthResponse } from "../../../domain/models/auth/auth.model";
import { Submodulo } from "../../../domain/models/menu/menu.model";

export const login = createAction(
    '[Auth] Login Success',
    props<AuthResponse>()
);

export const submodules = createAction(
    '[Submodules] Submodules Success',
    props<{ submodules: Submodulo[]}>()
);

export const toggleSubModule = createAction(
  '[Submodules] Toggle SubModule',
  props<{ submoduleId: string }>()
);