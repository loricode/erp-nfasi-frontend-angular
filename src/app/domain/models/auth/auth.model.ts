export interface AuthResponse {
    email: string;
    token: string;
    modules: Array<{ moduleId: string, moduleName: string, route: string; icon:string }>
}
