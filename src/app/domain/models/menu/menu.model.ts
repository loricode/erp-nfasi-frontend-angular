export interface MenuResponse {
    submoduleId: string;
    submoduleName: string;
    options: Array<Option>;
}

interface Option {
    optionId: string;
    optionName: string;
}

export interface Submodulo extends MenuResponse {
  open: boolean;
}