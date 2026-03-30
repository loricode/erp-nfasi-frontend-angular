export interface User {
    email: string;
    token: string;
    modules: Array<{ moduleId: string, moduleName: string, route: string; icon:string }>
}

