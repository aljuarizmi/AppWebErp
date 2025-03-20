import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cuentas',
  imports: [FormsModule,CommonModule],
  templateUrl: './cuentas.component.html',
  styleUrl: './cuentas.component.css'
})
export class CuentasComponent {
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
  @Input() txt_code: string ='';
  @Input() txt_description: string ='';
  @Input() HabilitarDescripcion: boolean=false;
  hidCodigo:string='';
  hid_SearchFiltro:string='';
  
  onChange(event: any){}
  onKeyPress(event: any){}
  onInput(event: any){}
  buscar(){}
  onClickLimpiar(){}
  buscarCodigo(){}
}
