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
  wrnprvGlprdFg1: string;
  wrnprvGlprdFg2: string;
  wrnprvGlprdFg3: string;
  wrnprvGlprdFg4: string;
  wrnprvGlprdFg5: string;
  wrnprvGlprdFg6: string;
  wrnprvGlprdFg7: string;
  wrnprvGlprdFg8: string;
  wrnprvGlprdFg9: string;
  wrnprvGlprdfg10: string;
  wrnprvGlprdfg11: string;
  wrnprvGlprdfg12: string;
  wrnprvGlprdfg13: string;
  filler0001: string;
}

export interface Account {
  mnNo: string;
  sbNo: string;
  dpNo: string;
  cashAcctDesc: string;
  searchAcctDesc: string;
  bankId: string;
  cshHomeCurrFg: boolean;
  currCd: string;
  filler0001: string;
  recBalance: number;
  bankBal: number;
  bankName: string;
  nextApChk: number;
  nextPrChk: number;
  bankBalance: number;
  lastReconDt: number;
  lastBankUpdate: number;
  cashExchMnNo: string;
  cashExchSbNo: string;
  cashExchDpNo: string;
  filler0002: string;
  a4GLIdentity: number;
  letToGenerateCheckFg: string;
  chkControlProcessFg: string;
  dcsBbFg: string;
  nullFg: string;
  noGenerateBbFg: string;
  paCorr03: number;
  acctDesc: string;
  searchDesc: string;
  tbSbTotLev: number;
  acctDesc2: string;
}

export interface Sygenusr {
  syUser: string;
  syUserPsc: string;
  syUserGroup: string;
  syUserType: string;
  selected:boolean;
}

export interface Sygenacs {
  syUser: string;
  syCompany: string;
  syMenuCode:string;
  syMenuState:string;
  syOpcActive:string;
  selected:boolean;
}

export interface Sygendbc {
  syCompanyDescr: string;
  syCompany: string;
  bizGrpId: number;
  syShowLogoFg: string;
  syCompanyLogo: string;
  syDoi: string;
  syShowFg: string;
  syDoiFg: string;
}

export interface Sygenopc {
  syMenuCode: string;
  syMenuName: string;
  syMenuParent: string;
  syMenuLevel: number;
  syPkgId: string;
  syOpcLiteral: string;
  syOpcActive: string;
  syOpcType: string;
  syOpcExec: string;
  syUrl: string;
  selected:boolean;
}