import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { BusquedaExitosaEvent } from '../../models/systemadmin.model';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent  {
  datosDinamicos: Record<string, any> = {}; // Se declara como un objeto dinámico
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
  @Input() FuncionPreviaValidacion?:()=> boolean;
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
  @Output() busquedaExitosa: EventEmitter<BusquedaExitosaEvent> = new EventEmitter<BusquedaExitosaEvent>(); // Usar el tipo personalizado
  @ViewChild('code') code!: ElementRef<HTMLInputElement>;
  constructor(private dialog:MatDialog,private authService: AuthService){
  }
  
  hidCodigo:string='';
  hid_SearchFiltro:string='';
  
  // Maneja el cambio de valor en el campo 'codigo'
  onChange(event: any) {
    this.txt_code = this.txt_code.trim();
    // Aquí puedes agregar cualquier lógica adicional para el cambio
    this.F_BuscarDatos_Control();
  }

  // Maneja el evento keypress en el campo 'codigo'
  onKeyPress(event: KeyboardEvent) {
    this.onKeyPressBusqueda_Control(event);
    if (this.SoloNumeros && !/^[0-9]$/.test(event.key)) {
      event.preventDefault();  // Si solo se permiten números, previene otras teclas
    }
  }
  
  buscar() {
    // Validación previa
    if (!this.FuncionPreviaValidacion || this.FuncionPreviaValidacion()) {
      this.ModalDialogSearch();
    }else{
      //alert("Mensaje sin validacion");
    }
    // Realiza la búsqueda, si es exitosa cambia el estado
    //if (this.txt_codigo === this.CodigoPrincipal) {
    if ("" === this.CodigoPrincipal) {
      //this.txt_descripcion = this.CampoDescripcion;
      //this.BolBusquedaExitosa = true;
      //this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa] }); // Emitir un arreglo con el 'success'
    } else {
      //this.txt_descripcion = 'No encontrado';
      //this.BolBusquedaExitosa = false;
      //this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa] }); // Emitir el arreglo con 'success'
    }
    // Ejecuta la función posterior a la búsqueda
    if (this.FuncionPostBusqueda) {
      // Lógica de post búsqueda si hay una función definida
    }
  }
  buscarCodigo() {
    if(this.txt_code.trim()!=''){
      //Buscamos en la bd el codigo ingresado por el usuario en el input
      const body = {
        searchFieldId: this.SearchID,
        searchNo: 1,
        searchNumeroRegistros: "1",
        sqlfilter: this.f_CrearFiltro(this.FiltrosAdicionales),
        campoDescripcion:this.CampoDescripcion,
        codigoPrincipal:this.CodigoPrincipal,
        habilitarWhere:true,
        codigo:this.txt_code.trim(),
        selectRowDatos:this.SelectRowDatos
      };
      this.authService.obtenerDatosCodigo<any>(body).subscribe({next:(data)=>{
        if(data!=null){
          this.datosDinamicos=data;
          if(Object.keys(this.datosDinamicos).length>0){
            this.BolBusquedaExitosa=true;
            this.DiccionarioRowDatos=data;
            this.txt_code=this.DiccionarioRowDatos[this.CodigoPrincipal];
            if(this.DescripcionVisible){
              if(this.DiccionarioRowDatos.hasOwnProperty(this.CampoDescripcion)){
                //Ponemos la descripcion en el campo respectivo
                this.txt_description=this.DiccionarioRowDatos[this.CampoDescripcion];
              }
            }
            this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa],mensaje:"Búsqueda completada",resultado:{code:this.txt_code,description:this.txt_description}});
          }else{
            this.BolBusquedaExitosa=false;
            alert("No se encontró el código "+this.txt_code.trim());
            this.txt_code='';
            this.txt_description='';
            this.code.nativeElement.focus();
            this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa],mensaje:"Búsqueda completada",resultado:{code:this.txt_code,description:this.txt_description} });
          }
        }else{
          this.BolBusquedaExitosa=false;
          alert("No se encontró el código "+this.txt_code.trim());
          this.txt_code='';
          this.txt_description='';
          this.code.nativeElement.focus();
          this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa],mensaje:"Búsqueda completada",resultado:{code:this.txt_code,description:this.txt_description} });
        }
      },
      error: (error) => {
        alert(error.message);
        this.txt_code='';
        this.txt_description='';
        this.code.nativeElement.focus();
      }
    })
    }else{
      this.txt_code='';
      this.txt_description='';
      this.BolBusquedaExitosa=false;
      this.code.nativeElement.focus();
      this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa],mensaje:"Búsqueda completada",resultado:{code:this.txt_code,description:this.txt_description} });
    }
  }
  limpiar() {
    this.txt_code = '';
    this.txt_description = '';
    this.hidCodigo='';
  }

  // Función para controlar la entrada solo numérica si es necesario
  onInput(event: any) {
    if (this.SoloNumeros) {
      const regex = /^[0-9]*$/;
      if (!regex.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
      }
    }
  }

  F_BuscarDatos_Control(): boolean {
    let bolResult = true;
    if (!this.FuncionPreviaValidacion || this.FuncionPreviaValidacion()) {
      bolResult = true;//eval(FuncionPrevia); // No recomendado por seguridad
    }
    if (!bolResult) {
      return false;
    }
    // Si hay un filtro SQL, lo aplicamos
    if (this.FiltrosAdicionales !== '') {
      this.FiltrosAdicionales = this.f_CrearFiltro(this.FiltrosAdicionales);
      const hid_SearchFiltro = document.getElementById(this.id + '_hid_SearchFiltro') as HTMLInputElement;
      if (hid_SearchFiltro) {
        hid_SearchFiltro.value = this.FiltrosAdicionales;
      }
    }
    // Simular el clic en el botón
    const btnBuscar = document.getElementById(this.id + '_btnBuscar') as HTMLButtonElement;
    if (btnBuscar) {
      //En este boton debe hacer la busqueda del codigo ingresado
      btnBuscar.click();
    }
    return true;
  }

  // Método auxiliar para generar el filtro (suponiendo que existe)
  f_CrearFiltro(vSQLFilter: string): string  {
    const arrSqlFilter = vSQLFilter.split('|');
    let strFiltro = '';
    for (let i = 1; i < arrSqlFilter.length; i += 2) {
      if (isNaN(Number(arrSqlFilter[i]))) { 
        alert('¡Parámetro inválido!');
        return '';
      } else {
        strFiltro += this.F_CompletarCadena(arrSqlFilter[i - 1], Number(arrSqlFilter[i]));
      }
    }
    return strFiltro;
  }

  F_CompletarCadena(vCadena: string, vTamanio: number): string {
    if (vCadena.length !== vTamanio) {
      if (vCadena.length < vTamanio) {
        vCadena = vCadena.padEnd(vTamanio, ' '); // Agrega espacios hasta el tamaño deseado
      } else {
        vCadena = vCadena.substring(0, vTamanio); // Recorta la cadena si es más grande
      }
    }
    return vCadena;
  }

  onKeyPressBusqueda_Control(
    event: KeyboardEvent,
  ): void {
    const keyAscii = event.keyCode || event.which;
    if (keyAscii === 13) { // Si presiona "Enter"
      event.preventDefault(); // Evita que el Enter cause otros efectos
      //const txtBusqueda = document.getElementById(this.id + '_txt_code') as HTMLInputElement;
      //const hidBusqueda = document.getElementById(this.id + '_hidCodigo') as HTMLInputElement;
      if (this.txt_code != this.hidCodigo) {
        this.F_BuscarDatos_Control();
      }
    }
  }
  onClickLimpiar(){
    //Se debe delegar
  }

  ModalDialogSearch(){
    const dialogRef = this.dialog.open(SearchComponent,{
      disableClose:true,
      autoFocus:true,
      closeOnNavigation:false,
      maxWidth: '70vw',
      //maxWidth: '900px',
      //position:{top:'30px'},
      //width:'900px',
      width: '80%',
      height: 'auto',
      //maxHeight: '90vh', // Máximo 90% de la altura de la pantalla
      data:{
        SearchID:this.SearchID,
        CodigoPrincipal:this.CodigoPrincipal,
        CampoDescripcion:this.CampoDescripcion,
        FiltrosAdicionales:this.f_CrearFiltro(this.FiltrosAdicionales)
      }
    });//codigo que abre la ventana modal
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if(this.AutoPostBack){
          const body = {
            searchFieldId: this.SearchID,
            searchNo: result.searchNo,
            searchNumeroRegistros: "1",
            sqlfilter: this.f_CrearFiltro(this.FiltrosAdicionales),
            campoDescripcion:this.CampoDescripcion,
            codigoPrincipal:this.CodigoPrincipal,
            habilitarWhere:true,
            codigo:result.selectedRow[this.CodigoPrincipal],
            selectRowDatos:""
          };
          this.authService.obtenerDatosCodigo<any>(body).subscribe((data)=>{
            this.datosDinamicos=data;
            if(Object.keys(this.datosDinamicos).length>0){
              this.BolBusquedaExitosa=true;
              this.DiccionarioRowDatos=data;
              this.txt_code=this.DiccionarioRowDatos[this.CodigoPrincipal];
              this.hidCodigo=this.DiccionarioRowDatos[this.CodigoPrincipal];
              if(this.DescripcionVisible){
                if(this.DiccionarioRowDatos.hasOwnProperty(this.CampoDescripcion)){
                  //Ponemos la descripcion en el campo respectivo
                  this.txt_description=this.DiccionarioRowDatos[this.CampoDescripcion];
                }
              }
              this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa],mensaje:"Búsqueda completada",resultado:{code:this.txt_code,description:this.txt_description} }); // Emitir un arreglo con el 'success'
            }else{
              this.BolBusquedaExitosa=false;
              this.hidCodigo='';
            }
          })
        }else{
          this.txt_code=result.selectedRow[this.CodigoPrincipal];
          this.hidCodigo=result.selectedRow[this.CodigoPrincipal];
          this.BolBusquedaExitosa=true;
          //this.BolBusquedaExitosa=true;
          if(this.DescripcionVisible){
            if(result.selectedRow.hasOwnProperty(this.CampoDescripcion)){
              //Ponemos la descripcion en el campo respectivo
              this.txt_description=result.selectedRow[this.CampoDescripcion];
            }
          }
          this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa],mensaje:"Búsqueda completada",resultado:{code:this.txt_code,description:this.txt_description} });
        }
      } else {
        //console.log('El usuario canceló la selección.',result);
      }
    });
  }
}
