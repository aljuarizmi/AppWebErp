import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Compfile } from '../../models/systemadmin.model';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { SearchComponent } from '../search/search.component';
import { SystemadminService } from '../../services/systemadmin.service';

@Component({
  selector: 'app-cuentas',
  imports: [FormsModule,CommonModule],
  templateUrl: './cuentas.component.html',
  styleUrl: './cuentas.component.css'
})
export class CuentasComponent implements OnInit{
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
  @ViewChild('code1') code1!: ElementRef<HTMLInputElement>;
  hidCodigo:string='';
  hid_SearchFiltro:string='';
  searchRetVal:string="";
  constructor(private dialog:MatDialog,private authService: AuthService,private adminService: SystemadminService){}
  ngOnInit(): void {
    let Tamanios:Compfile=this.authService.getTamaniosCuenta();
    this.TamanioUNO=Tamanios.glAcctLev1Dgts;
    this.TamanioDOS=Tamanios.glAcctLev2Dgts;
    this.TamanioTRES=Tamanios.glAcctLev3Dgts;

  }
  onChange(event: any){
    this.F_BuscarCuenta();
  }
  onKeyPress(event: KeyboardEvent){
    this.onKeyPressCuenta(event);
  }
  onInput(event: any){
    const regex = /^[0-9]*$/;
      if (!regex.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
      }
  }
  F_BuscarCuenta(){
    if((this.txt_code1.trim()!=='')&&(this.txt_code2.trim()!=='')&&(this.txt_code3.trim()!=='')){
      //Completamos los ceros dependiendo del tamaño de cada campo de la cuenta (nivel)
      if(this.txt_code1.trim().length<=8){
        this.txt_code1 = this.txt_code1.padEnd(this.TamanioUNO, '0');
      }
      if(this.txt_code2.trim().length<=8){
        this.txt_code2 = this.txt_code2.padEnd(this.TamanioDOS, '0');
      }
      if(this.txt_code3.trim().length<=8){
        this.txt_code3 = this.txt_code3.padEnd(this.TamanioTRES, '0');
      }
      //Buscamos la cuenta
      this.buscarCodigo();
    }
  }
  onKeyPressCuenta(event: KeyboardEvent){
    const keyAscii = event.keyCode || event.which;
    //console.log("keyAscii:"+keyAscii);
    if (keyAscii === 13) { // Si presiona "Enter"
      event.preventDefault(); // Evita que el Enter cause otros efectos
      const input = event.target as HTMLInputElement;
      const txtBusqueda = document.getElementById(this.id + '_txt_code') as HTMLInputElement;
      //const hidBusqueda = document.getElementById(this.id + '_hidCodigo') as HTMLInputElement;//Este objeto sirve para validar que no busque 2 veces el mismo dato.
      if (input.value != this.hidCodigo) {
        this.F_BuscarCuenta();
      }
    }
  }
  buscar(){
    this.ModalDialogSearch();
  }
  onClickLimpiar(){}
  buscarCodigo(){
    if((this.txt_code1.trim()!=='')&&(this.txt_code2.trim()!=='')&&(this.txt_code3.trim()!=='')){
      //Buscamos en la bd el codigo ingresado por el usuario en el input
      this.hidCodigo=this.txt_code1.padEnd(8, '0')+this.txt_code2.padEnd(8, '0')+this.txt_code3.padEnd(8, '0');
      this.txt_code=this.hidCodigo;
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
        if(data){
          this.datosDinamicos=data;
          if(Object.keys(this.datosDinamicos).length>0){
            this.BolBusquedaExitosa=true;
            //this.DiccionarioRowDatos=data;
            if(this.DescripcionVisible){
              /*if(this.DiccionarioRowDatos.hasOwnProperty(this.CampoDescripcion)){
                //Ponemos la descripcion en el campo respectivo
                this.txt_description=this.DiccionarioRowDatos[this.CampoDescripcion];
              }*/
              if (this.SearchID === "SY-ACCOUNT" || 
                this.SearchID === "SY-ACCOUNT-GRP" || 
                this.SearchID === "SY-ACC-GRP-002" || 
                this.SearchID === "SY-ACCOUNT-OPER") {
              //console.log("Es un tipo de cuenta SY-ACCOUNT.");
                this.txt_description=data.acct_desc;
              } 
              else if (this.SearchID === "SY-CASH-ACCOUNT") {
              //console.log("Es un tipo de cuenta SY-CASH-ACCOUNT.");
                this.txt_description=data.cash_acct_desc;
              } 
              else if (this.SearchID === "SY-CSH-ACC-DIF") {
              //console.log("Es un tipo de cuenta SY-CSH-ACC-DIF.");
              } 
              else {
              //console.log("No coincide con ningún tipo de cuenta.");
                this.txt_description=data.cash_acct_desc;
              }
            }
            //this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa],mensaje:"Búsqueda completada",resultado:{code:this.txt_code,description:this.txt_description}});
          }else{
            this.BolBusquedaExitosa=false;
            alert("No se encontró el código "+this.txt_code.trim());
            this.txt_code='';
            this.txt_description='';
            this.txt_code1='';
            this.txt_code2='';
            this.txt_code3='';
            this.code1.nativeElement.focus();
            //this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa],mensaje:"Búsqueda completada",resultado:{code:this.txt_code,description:this.txt_description} });
          }
        }else{
          this.BolBusquedaExitosa=false;
          alert("No se encontró el código "+this.txt_code.trim());
          this.txt_code='';
          this.txt_description='';
          this.txt_code1='';
          this.txt_code2='';
          this.txt_code3='';
          this.code1.nativeElement.focus();
          //this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa],mensaje:"Búsqueda completada",resultado:{code:this.txt_code,description:this.txt_description} });
        }
      },
      error: (error) => {
        alert(error.message);
        this.txt_code='';
        this.txt_description='';
        this.txt_code1='';
        this.txt_code2='';
        this.txt_code3='';
        this.code1.nativeElement.focus();
      }
    })
    }else{

    }
  }

  ModalDialogSearch(){
      const dialogRef = this.dialog.open(SearchComponent,{
        disableClose:true,
        autoFocus:true,
        closeOnNavigation:false,
        maxWidth: '70vw',
        width: '80%',
        height: 'auto',
        data:{
          SearchID:this.SearchID,
          CodigoPrincipal:this.CodigoPrincipal,
          CampoDescripcion:this.CampoDescripcion,
          FiltrosAdicionales:this.f_CrearFiltro(this.FiltrosAdicionales)
        }
      });//codigo que abre la ventana modal
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          //this.searchRetVal=result.searchRetVal;
          //const hidBusqueda = document.getElementById(this.id + '_hidCodigo') as HTMLInputElement;
          this.hidCodigo=this.returnFile(result.selectedRow,result.searchRetVal);
          this.txt_code= this.returnFile(result.selectedRow,result.searchRetVal);
          
          this.txt_code1=this.txt_code.substring(0,8).substring(0,this.TamanioUNO);
          this.txt_code2=this.txt_code.substring(8,16).substring(0,this.TamanioDOS);
          this.txt_code3=this.txt_code.substring(16,24).substring(0,this.TamanioTRES);
          //console.log("this.txt_code:"+this.txt_code+",this.TamanioUNO:"+this.TamanioUNO+",this.TamanioDOS:"+this.TamanioDOS+",this.TamanioTRES:"+this.TamanioTRES);
          //console.log("this.txt_code.substring-16:"+this.txt_code.substring(16,this.TamanioTRES));
          //console.log("Cuenta: "+this.returnFile(result.selectedRow,this.searchRetVal));
          //console.log("result:"+result.selectedRow);
          if(this.AutoPostBack){
            const body = {
              searchFieldId: this.SearchID,
              searchNo: result.searchNo,
              searchNumeroRegistros: "1",
              sqlfilter: this.f_CrearFiltro(this.FiltrosAdicionales),
              campoDescripcion:this.CampoDescripcion,
              codigoPrincipal:this.CodigoPrincipal,
              habilitarWhere:true,
              codigo:this.hidCodigo,
              selectRowDatos:""
            };
            this.authService.obtenerDatosCodigo<any>(body).subscribe((data)=>{
              this.datosDinamicos=data;
              if(Object.keys(this.datosDinamicos).length>0){
                this.BolBusquedaExitosa=true;
                
                //this.txt_code=this.DiccionarioRowDatos[this.CodigoPrincipal];
                if(this.DescripcionVisible){
                  if (this.SearchID === "SY-ACCOUNT" || 
                    this.SearchID === "SY-ACCOUNT-GRP" || 
                    this.SearchID === "SY-ACC-GRP-002" || 
                    this.SearchID === "SY-ACCOUNT-OPER") {
                  //console.log("Es un tipo de cuenta SY-ACCOUNT.");
                    this.txt_description=data.acct_desc;
                  } 
                  else if (this.SearchID === "SY-CASH-ACCOUNT") {
                  //console.log("Es un tipo de cuenta SY-CASH-ACCOUNT.");
                    this.txt_description=data.cash_acct_desc;
                  } 
                  else if (this.SearchID === "SY-CSH-ACC-DIF") {
                  //console.log("Es un tipo de cuenta SY-CSH-ACC-DIF.");
                  } 
                  else {
                  //console.log("No coincide con ningún tipo de cuenta.");
                    this.txt_description=data.cash_acct_desc;
                  }
                  /*if(this.DiccionarioRowDatos.hasOwnProperty(this.CampoDescripcion)){
                    //Ponemos la descripcion en el campo respectivo
                    this.txt_description=this.DiccionarioRowDatos[this.CampoDescripcion];
                  }*/
                }
                //this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa],mensaje:"Búsqueda completada",resultado:{code:this.txt_code,description:this.txt_description} }); // Emitir un arreglo con el 'success'
              }else{
                this.BolBusquedaExitosa=false;
                this.hidCodigo='';
              }
            })
          }else{
            //this.txt_code=result.selectedRow[this.CodigoPrincipal];
            //this.hidCodigo=result.selectedRow[this.CodigoPrincipal];

            this.hidCodigo=this.returnFile(result.selectedRow,result.searchRetVal);
            this.txt_code= this.returnFile(result.selectedRow,result.searchRetVal);
          
            this.txt_code1=this.txt_code.substring(0,8).substring(0,this.TamanioUNO);
            this.txt_code2=this.txt_code.substring(8,16).substring(0,this.TamanioDOS);
            this.txt_code3=this.txt_code.substring(16,24).substring(0,this.TamanioTRES);

            this.BolBusquedaExitosa=true;
            //this.BolBusquedaExitosa=true;
            if(this.DescripcionVisible){
              /*if(result.selectedRow.hasOwnProperty(this.CampoDescripcion)){
                //Ponemos la descripcion en el campo respectivo
                this.txt_description=result.selectedRow[this.CampoDescripcion];
              }*/
            }
            //this.busquedaExitosa.emit({ success: [this.BolBusquedaExitosa],mensaje:"Búsqueda completada",resultado:{code:this.txt_code,description:this.txt_description} });
          }
        } else {
          //console.log('El usuario canceló la selección.',result);
        }
      });
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

  returnFile(arrDataSearch: any, arrS_SearchRetVal: string): string {
    let strCadena = '';
    const dataSearchArray = Object.values(arrDataSearch).join('|').split('|');//arrDataSearch.split('|');//Contiene los datos de la fila seleccionada
    const searchRetValArray = arrS_SearchRetVal.split(',');//Contiene la variable de searchRetVal
    //console.log("dataSearchArray:"+dataSearchArray);
    //console.log("searchRetValArray:"+searchRetValArray);
    // Si hay un índice principal válido, retornamos el valor correspondiente
    /*const indexCodigoPrincipal = parseInt(hidIndexCodigoPrincipal, 10);
    if (!isNaN(indexCodigoPrincipal) && indexCodigoPrincipal !== -1) {
      return dataSearchArray[indexCodigoPrincipal] || '';
    }*/
    // Recorremos los valores y formateamos la salida
    for (let i = 0; i < searchRetValArray.length; i++) {
      const valor = searchRetValArray[i];
      //console.log("valor:"+valor+",searchRetValArray.length:"+searchRetValArray.length+",dataSearchArray.length:"+dataSearchArray.length);
      if (!isNaN(Number(valor)) || valor === 'Y') {
        if (!isNaN(Number(valor))) {
          strCadena += this.formateaReturnSearch(dataSearchArray[i], Number(valor));
        } else {
          strCadena += this.formateaReturnSearch(dataSearchArray[i], dataSearchArray[i].length);
        }
      }
    }
    return strCadena;
  }

  formateaReturnSearch(strCadena: string, intTamanio: number): string {
    const intLonCadena = strCadena.length;
    if (intLonCadena < intTamanio) {
      return strCadena.padEnd(intTamanio, " "); // Rellena con espacios
    } else if (intLonCadena > intTamanio) {
      return strCadena.substring(0, intTamanio); // Recorta la cadena
    }
    return strCadena; // Retorna la misma cadena si ya tiene el tamaño exacto
  }
}
