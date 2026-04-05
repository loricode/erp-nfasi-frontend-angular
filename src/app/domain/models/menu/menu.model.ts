export interface MenuResponse {
    submoduleId: string;
    submoduleName: string;
    options: Array<Option>;
}

export interface Option {
    optionId: string;
    optionName: string;
    icon:string;
    route:string;
}

export interface Submodulo extends MenuResponse {
  open: boolean; 
}