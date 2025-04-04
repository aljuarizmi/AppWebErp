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
  mn_no: string;
  sb_no: string;
  dp_no: string;
  cash_acct_desc: string;
  search_acct_desc: string;
  bank_id: string;
  csh_home_curr_fg: boolean;
  curr_cd: string;
  filler_0001: string;
  rec_balance: number;
  bank_bal: number;
  bank_name: string;
  next_ap_chk: number;
  next_pr_chk: number;
  bank_balance: number;
  last_recon_dt: number;
  last_bank_update: number;
  cash_exch_mn_no: string;
  cash_exch_sb_no: string;
  cash_exch_dp_no: string;
  filler_0002: string;
  A4GLIdentity: number;
  let_to_generate_check_fg: string;
  chk_control_process_fg: string;
  dcs_bb_fg: string;
  null_fg: string;
  no_generate_bb_fg: string;
  pa_corr_03: number;
  acct_desc: string;
  search_desc: string;
  tb_sb_tot_lev: number;
  acct_desc_2: string;
}

