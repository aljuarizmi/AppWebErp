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
export interface Syprdfil {
  prdKey: string;
  strDt1: number;
  endDt1: number;
  strDt2: number;
  endDt2: number;
  strDt3: number;
  endDt3: number;
  strDt4: number;
  endDt4: number;
  strDt5: number;
  endDt5: number;
  strDt6: number;
  endDt6: number;
  strDt7: number;
  endDt7: number;
  strDt8: number;
  endDt8: number;
  strDt9: number;
  endDt9: number;
  strDt10: number;
  endDt10: number;
  strDt11: number;
  endDt11: number;
  strDt12: number;
  endDt12: number;
  strDt13: number;
  endDt13: number;
  noOfValPrd: number;
  defPrdCd: string;
  tmpYrClsFg: string;
  warnOrPrev: string;
  currentPrd: number;
  wrnPrvGlPrdFg1: string;
  wrnPrvGlPrdFg2: string;
  wrnPrvGlPrdFg3: string;
  wrnPrvGlPrdFg4: string;
  wrnPrvGlPrdFg5: string;
  wrnPrvGlPrdFg6: string;
  wrnPrvGlPrdFg7: string;
  wrnPrvGlPrdFg8: string;
  wrnPrvGlPrdFg9: string;
  wrnPrvGlPrdFg10: string;
  wrnPrvGlPrdFg11: string;
  wrnPrvGlPrdFg12: string;
  wrnPrvGlPrdFg13: string;
  filler0001: string;
}
