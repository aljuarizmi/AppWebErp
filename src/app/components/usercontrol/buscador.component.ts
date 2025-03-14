import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

// Define un tipo para el evento
interface BusquedaExitosaEvent {
  success: boolean[];
}

@Component({
  selector: 'app-buscador',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements OnInit {
  datosDinamicos: Record<string, any> = {}; // Se declara como un objeto dinámico
  @Input() id: string = ''; // Se puede sobrescribir al usar el componente
  codigo: string = '';
  descripcion: string = '';
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
  //@Input() txt_codigo: string ="";
  @Input() HabilitarDescripcion: boolean=false;
  //@Output() busquedaExitosa: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() busquedaExitosa: EventEmitter<BusquedaExitosaEvent> = new EventEmitter<BusquedaExitosaEvent>(); // Usar el tipo personalizado
  
  constructor(private dialog:MatDialog,private authService: AuthService){
  }
  ngOnInit(): void {
    //console.log("Propiedades: "+this.SearchID);
  }
  //txt_codigo: string = '';
  txt_descripcion: string = '';
  hidCodigo:string='';
  hid_SearchFiltro:string='';
  
  // Maneja el cambio de valor en el campo 'codigo'
  onChange(event: any) {
    //console.log('Cambio en el campo código:', value);
    //this.txt_codigo = this.txt_codigo.trim();
    // Aquí puedes agregar cualquier lógica adicional para el cambio
    const btnBuscar = document.getElementById(this.id + '_btnBuscar') as HTMLButtonElement;
    const hid_SearchFiltro = document.getElementById(this.id + '_hid_SearchFiltro') as HTMLInputElement;
    //HTMLInputElement
    this.F_BuscarDatos_Control(btnBuscar,this.FuncionPreviaValidacion,this.FiltrosAdicionales,hid_SearchFiltro);
  }

  // Maneja el evento keypress en el campo 'codigo'
  onKeyPress(event: KeyboardEvent) {
    //console.log('Tecla presionada:', event.key);
    const txtBusqueda = document.getElementById(this.id + '_txt_codigo') as HTMLInputElement;
    const hidBusqueda = document.getElementById(this.id + '_hidCodigo') as HTMLInputElement;
    const btnLimpiar = document.getElementById(this.id + '_btnLimpiar') as HTMLButtonElement;
    const hid_SearchFiltro = document.getElementById(this.id + '_hid_SearchFiltro') as HTMLInputElement;
    //this.onKeyPressBusqueda_Control(event,txtBusqueda,hidBusqueda,btnLimpiar,this.FuncionPreviaValidacion,this.FiltrosAdicionales,hid_SearchFiltro);
    if (this.SoloNumeros && !/^[0-9]$/.test(event.key)) {
      event.preventDefault();  // Si solo se permiten números, previene otras teclas
    }
  }
  
  buscar() {
    // Validación previa
    this.ModalDialogSearch();
    if (this.FuncionPreviaValidacion) {
      // Lógica de validación si hay una función definida
      //alert("Mensaje de validacion");
    }else{
      //alert("Mensaje sin validacion");
    }

    // Realiza la búsqueda, si es exitosa cambia el estado
    //if (this.txt_codigo === this.CodigoPrincipal) {
      if ("" === this.CodigoPrincipal) {
      this.txt_descripcion = this.CampoDescripcion;
      this.BolBusquedaExitosa = true;
      this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa] }); // Emitir un arreglo con el 'success'
    } else {
      this.txt_descripcion = 'No encontrado';
      this.BolBusquedaExitosa = false;
      this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa] }); // Emitir el arreglo con 'success'
    }
    // Ejecuta la función posterior a la búsqueda
    if (this.FuncionPostBusqueda) {
      // Lógica de post búsqueda si hay una función definida
    }
  }

  limpiar() {
    //this.txt_codigo = '';
    this.txt_descripcion = '';
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

  F_BuscarDatos_Control(
    //txtBusqueda: HTMLInputElement, 
    //hidBusqueda: string, 
    //txtDescripcion: string, 
    botonId: HTMLButtonElement, 
    //btnLimpiar: string, 
    FuncionPrevia: string, 
    vSQLFilter: string, 
    hid_SearchFiltro: HTMLInputElement
  ): boolean {
    let bolResult = true;
    if (FuncionPrevia !== '') {
      //bolResult = eval(FuncionPrevia); // ⚠️ No recomendado por seguridad
    }
    if (!bolResult) {
      return false;
    }
    // Si hay un filtro SQL, lo aplicamos
    if (vSQLFilter !== '') {
      vSQLFilter = this.f_CrearFiltro(vSQLFilter);
      //const filtroElemento = document.getElementById(hid_SearchFiltro) as HTMLInputElement;
      if (hid_SearchFiltro) {
        hid_SearchFiltro.value = vSQLFilter;
      }
    }
    // Simular el clic en el botón
    //const boton = document.getElementById(botonId) as HTMLButtonElement;
    if (botonId) {
      //En este boton debe hacer la busqueda del codigo ingresado
      botonId.click();
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
    txtBusqueda: HTMLInputElement,
    hidBusqueda: HTMLInputElement,
    //txtDescripcion: string,
    //boton: string,
    btnLimpiar: HTMLButtonElement,
    FuncionPrevia: string,
    vSQLFilter: string,
    hid_SearchFiltro: HTMLInputElement
  ): void {
    const keyAscii = event.keyCode || event.which;
    if (keyAscii === 13) { // Si presiona "Enter"
      event.preventDefault(); // Evita que el Enter cause otros efectos
      //const hBusqueda = document.getElementById(hidBusqueda) as HTMLInputElement;
      if (txtBusqueda.value != hidBusqueda.value) {
        this.F_BuscarDatos_Control(btnLimpiar, FuncionPrevia, vSQLFilter, hid_SearchFiltro);
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
      maxWidth: '900px',
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
        //alert("Se escogió un registro");
        console.log("selectedRow: "+result.selectedRow[this.CodigoPrincipal]);
        const body = {
          searchFieldId: this.SearchID,
          searchNo: result.searchNo,
          searchNumeroRegistros: "1",
          sqlfilter: this.f_CrearFiltro(this.FiltrosAdicionales),
          campoDescripcion:this.CampoDescripcion,
          codigoPrincipal:this.CodigoPrincipal,
          habilitarWhere:true,
          codigo:result.selectedRow[this.CodigoPrincipal],
          selectRowDatos:"",
          listFiltroDatoBuscar:null
        };
        this.authService.obtenerDatosCodigo<any>(body).subscribe((data)=>{
          console.log('Dato seleccionado:', data);
          this.datosDinamicos=data;
          if(Object.keys(this.datosDinamicos).length>0){
            this.BolBusquedaExitosa=true;
            this.DiccionarioRowDatos=data;
            if(this.DescripcionVisible){
              if(this.DiccionarioRowDatos.hasOwnProperty(this.CampoDescripcion)){
                //Ponemos la descripcion en el campo respectivo

              }
            }
          }else{
            this.BolBusquedaExitosa=false;
          }
        })
      } else {
        //console.log('El usuario canceló la selección.',result);
      }
    });
  }
  
}
