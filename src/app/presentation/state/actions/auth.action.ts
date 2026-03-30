import { createAction, props } from "@ngrx/store";
import { AuthResponse } from "../../../domain/models/auth/auth.model";

export const login = createAction(
    '[Auth] Login Success',
    props<AuthResponse>()
);