export interface Resultado {
    code: string;
    description?: string|null;
    DiccionarioRowDatos?: { [key: string]: string }|null;
    code2?:string|null;
    code3?:string|null;
  }
export interface BusquedaExitosaEvent {
  success: boolean[];
  mensaje: string;
  resultado: Resultado;
}
export interface Compfile {
    compKey1:string;
    rptName:string;
    displayName:string;
    addrLine1:string;
    addrLine2:string;
    addrLine3:string;
    phoneNo:string;
    glAcctLev1Dgts:number;
    glAcctLev2Dgts:number;
    glAcctLev3Dgts:number;
    startJnlHistNo:number;
    typeEconomicActivity:string;
    employees:number;
    eiCusNo:string;
    ratePct1:number;
    ratePct2:number;
}
