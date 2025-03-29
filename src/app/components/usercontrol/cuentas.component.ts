import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Compfile } from '../../models/systemadmin.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cuentas',
  imports: [FormsModule,CommonModule],
  templateUrl: './cuentas.component.html',
  styleUrl: './cuentas.component.css'
})
export class CuentasComponent implements OnInit{
  @Input() id: string = ''; // Se puede sobrescribir al usar el componente
  @Input() SearchID: string = '';
  @Input() TamanioCodigo: number = 100;
  @Input() TamanioDescripcion: number = 50;
  @Input() DiccionarioRowDatos: { [key: string]: string } = {};
  @Input() SelectRowDatos: string = '';
  @Input() CodigoPrincipal: string = '';
  @Input() CampoDescripcion: string = '';
  @Input() CompletarCeros: boolean = false;
  @Input() SoloNumeros: boolean = false;
  @Input() FuncionPreviaValidacion: string = '';
  @Input() FuncionPostBusqueda: string = '';
  @Input() FiltrosAdicionales: string = '';
  @Input() DescripcionVisible: boolean = true;
  @Input() LimpiarCamposAdicionales: boolean = false;
  @Input() textHid: string = '';
  @Input() TextDescripcion: string = '';
  @Input() Enabled: boolean = true;
  @Input() BolBusquedaExitosa: boolean = false;
  @Input() MaxLength: number = 15;
  @Input() BolSoloEnteros: boolean = false;
  @Input() GetNombreControlCodigo: string = '';
  @Input() GetNombbreControlDescripcion: string = '';
  @Input() GetNombreControlBotonBuscar: string = '';
  @Input() AutoPostBack: boolean = false;
  @Input() SearchFilter: boolean = false;
  @Input() SearchDirect: boolean = false;
  @Input() UseCatalog: boolean = false;
  @Input() Ancho: number = 300;
  @Input() Alto: number = 40;
  @Input() txt_code1: string ='';
  @Input() txt_code2: string ='';
  @Input() txt_code3: string ='';
  @Input() txt_code: string ='';
  @Input() txt_description: string ='';
  @Input() HabilitarDescripcion: boolean=false;
  @Input() TamanioUNO: number=0;
  @Input() TamanioDOS: number=0;
  @Input() TamanioTRES: number=0;
  @Input() ValorUNO: string ='';
  @Input() ValorDOS: string ='';
  @Input() ValorTRES: string ='';
  hidCodigo:string='';
  hid_SearchFiltro:string='';
  
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    let Tamanios:Compfile=this.authService.getTamaniosCuenta();
    this.TamanioUNO=Tamanios.glAcctLev1Dgts;
    this.TamanioDOS=Tamanios.glAcctLev2Dgts;
    this.TamanioTRES=Tamanios.glAcctLev3Dgts;

  }
  onChange(event: any){}
  onKeyPress(event: any){
    
  }
  onInput(event: any){}
  buscar(){}
  onClickLimpiar(){}
  buscarCodigo(){}
}
