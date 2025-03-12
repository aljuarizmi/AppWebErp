import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatDialogModule,MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../services/auth.service';
import { stringify } from 'querystring';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


interface ApiResponse {
  listFiltroDatoBuscar: string[];
  listFiltroTipoBuscar: string[];
  listCampos: string[];
  table: string;
}

@Component({
  selector: 'app-search',
  imports: [MatDialogModule,MatButtonModule,MatRadioModule,MatFormFieldModule,MatInputModule,MatIconModule,MatSlideToggleModule,ReactiveFormsModule,MatTableModule,MatOption,CommonModule,MatSelectModule,MatProgressSpinnerModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = [];
  searchForm: FormGroup;
  searchOptions : { id: number, name: string }[]=[];
  //searchOptions = [{ id: 1, name: '1 A/P Ship Via' }];
  rowLimits = [10, 50, 100];
  columns: { key: string; label: string }[] = [];
  tipos: { value: string/*; label: string*/ }[] = [];
  data = new MatTableDataSource<any>([]);
  dataPadre = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<SearchComponent>);
  filteredData = new MatTableDataSource<any>([]);
  filterControls: { [key: string]: FormControl } = {};
  selectedRow: any;
  listCampos: string[] = [];
  listColumnas: { key: string; label: string }[] = [];
  listFiltroDatoBuscar: string[] = [];
  listFiltroTipoBuscar:string[]=[];
  SearchID:string="";
  CodigoPrincipal:string="";
  CampoDescripcion:string="";
  FiltrosAdicionales:string="";
  isLoading: boolean = false; // Inicialmente en false
  previousFilters: { [key: string]: string } = {}; // Almacena los filtros previos
  //filterTypeControls: { [key: string]: FormControl } = {};
  filterTypeControls: { [value: string]: FormControl } = {};
  filterTypes = [
    { value: '0', label: 'Empieza con' },
    { value: '1', label: 'Es igual a' },
    { value: '2', label: 'Contiene' }
  ];
  selectedData: any;
  //listaVacia:string[]=[];
  constructor(private fb: FormBuilder,private authService: AuthService) {
    this.searchForm = this.fb.group({
      searchType: [null],
      rowLimit: [10],
      typeFilter: ['0']
    });
  }

  ngOnInit(): void {
    this.columns.forEach(col => {
      this.filterControls[col.key] = new FormControl('');
      this.filterTypeControls[col.key+'_type'] = new FormControl('0');
    });
    this.SearchID=this.dataPadre.SearchID;
    this.CodigoPrincipal=this.dataPadre.CodigoPrincipal;
    this.CampoDescripcion=this.dataPadre.CampoDescripcion;
    this.FiltrosAdicionales=this.dataPadre.FiltrosAdicionales;
    // Inicializa las columnas para la tabla
    this.displayedColumns = this.columns.map(c => c.key);
    this.obtenerBuscadores();
  }
  obtenerBuscadores():void{
    const body = {searchFieldId: this.SearchID};
    this.authService.obtenerBuscadores<{ SEARCH_NO: number; SEARCH_TITLE: string }[]>(body).subscribe(response => {
      this.searchOptions = response.map(item => ({
        id: item.SEARCH_NO,
        name: item.SEARCH_TITLE
      }));
      // Establecer el primer valor disponible
      if (this.searchOptions.length > 0) {
        this.searchForm.patchValue({ searchType: this.searchOptions[0].id });
      }
      this.obtenerDatosBuscador('NO');
    },error => {
      console.error('Error al obtener buscadores:', error);
    }
  );
  }
  obtenerDatosBuscador(busquedaConFiltro:string):void{
    this.isLoading = true; // Activar el indicador de carga
    const body = {
      searchFieldId: this.SearchID,
      searchNo: Number(this.searchForm.get('searchType')?.value.toString()),
      searchNumeroRegistros: this.searchForm.get('rowLimit')?.value.toString(),
      sqlfilter: this.FiltrosAdicionales,
      campoDescripcion:this.CampoDescripcion,
      codigoPrincipal:this.CodigoPrincipal,
      habilitarWhere:true,
      busquedaConFiltro:busquedaConFiltro,
      listCampos:this.listCampos,
      listFiltroDatoBuscar:this.listFiltroDatoBuscar,
      listFiltroTipoBuscar:this.listFiltroTipoBuscar,
      listColumnas:this.listColumnas,
      listTipos:this.tipos
    };
    //Reemplazamos ApiResponse por any
    this.authService.obtenerDatosBuscador<any>(body).subscribe(
      (data) => {
        this.filteredData.data=data.data;
        this.data.data=data.data;
        this.columns=data.listColumnas;
        this.listColumnas=data.listColumnas;
        this.listCampos=data.listCampos;
        this.tipos=data.listTipos;
        this.listFiltroTipoBuscar=data.listFiltroTipoBuscar;
        this.listFiltroDatoBuscar=data.listFiltroDatoBuscar;
        this.displayedColumns=this.columns.map(c => c.key);
        this.columns.forEach(col => {
          if (!this.filterControls[col.key]) {
            //Aqui se llena el objeto filterControls con el nombre de los campos de la grilla
            this.filterControls[col.key] = new FormControl('');
          }
        });
        this.columns.forEach(col => {
          if (!this.filterTypeControls[col.key+'_type']) {
            //Aqui se llena el objeto filterControls con el nombre de los campos de la grilla
            this.filterTypeControls[col.key+'_type'] = new FormControl('0');
          }
        });
        this.isLoading = false; // Desactivar cuando los datos llegan
        console.log("Se obtuvo datos")
      },
      (error) => {
        this.isLoading = false; // Desactivar incluso si hay error
        console.error("Error al obtener datos:", error);
      }
    );
  }

  applyFilters(): void {
    let filtered = this.data.data;
    let newFilters: { [key: string]: string } = {};
    let listFiltroDatoTmp: string[] =this.listFiltroDatoBuscar;
    this.listCampos=[];//contiene el nombre del campo sobre el cual se va buscar el dato
    this.listFiltroDatoBuscar=[];//contiene el dato a buscar
    this.columns.forEach(col => {
      const filterValue = this.filterControls[col.key].value?.toString().trim().toLowerCase()||'';
      //const filterType = this.filterTypeControls[col.key].value || '2';
      newFilters[col.key] = filterValue; 
      if (filterValue) {
        this.listCampos.push(col.key);
        this.listFiltroDatoBuscar.push(filterValue);
      }
    });
    this.listFiltroTipoBuscar=[];
    this.columns.forEach(col => {
      const filterValue = this.filterTypeControls[col.key+'_type'].value?.toString().trim().toLowerCase()||'';
      //console.log("applyFilters=>filterTypeControls: "+this.filterTypeControls[col.key+'_type'].value);
      //const filterType = this.filterTypeControls[col.key].value || '2';
      //newFilters[col.key] = filterValue; 
      if (filterValue) {
        //console.log(filterValue);
        //this.tipos.push({value:col.key});
        this.listFiltroTipoBuscar.push(filterValue);
      }
    });
    //console.log("listFiltroDatoBuscar: "+this.listFiltroDatoBuscar);
    if (this.listFiltroDatoBuscar.length === 0){
      this.filteredData.data = this.data.data;
      return;
    }
    // Asegurar que listFiltroTipoBuscar tenga el mismo tamaño que listCampos
    //El objeto listFiltroTipoBuscar debe tener el mismo tamaño que la cantidad de campos de la grilla
    //Solo debe cambiar el valor seleccionado de cada select de cada filtro
    //this.listFiltroTipoBuscar = Array(this.listCampos.length).fill("2");
    //this.listFiltroTipoBuscar = this.listCampos.map(campo => this.filterTypeControls[campo].value);
    this.listCampos.forEach((campo, index) => {
      //console.log("campo:"+campo+",index:"+index+", listFiltroDatoBuscar:"+this.listFiltroDatoBuscar.length+", Dato:"+this.listFiltroDatoBuscar[index]+",campos:"+this.listCampos+",filtered:"+filtered+",data.data:"+this.data.data);
      filtered = filtered.filter(row => 
        row[campo] && row[campo].toString().toLowerCase().includes(this.listFiltroDatoBuscar[index])
      );
    });

    // ✅ COMPARAR FILTROS IGNORANDO MAYÚSCULAS, ESPACIOS Y NÚMEROS
  if (this.areFiltersSame(this.previousFilters, newFilters)) {
    console.log("Filtros iguales, no se llama a la API.");
    return;
  }

  this.previousFilters = { ...newFilters };

    //console.log("listCampos: "+this.listCampos);
    if (this.listCampos.length > 0) {
      //this.getFilteredData({ listCampos, listFiltroDatoBuscar });
      this.obtenerDatosBuscador('SI');
    } else {
      // Si no hay filtros, mostrar todos los datos sin llamar a la API
      this.filteredData.data = this.data.data;
    }
  }

  areFiltersSame(filters1: { [key: string]: any }, filters2: { [key: string]: any }): boolean {
    const keys1 = Object.keys(filters1);
    const keys2 = Object.keys(filters2);
  
    if (keys1.length !== keys2.length) return false;
  
    return keys1.every(key => {
      const value1 = (filters1[key] ?? '').toString().trim().toLowerCase();
      const value2 = (filters2[key] ?? '').toString().trim().toLowerCase();
      return value1 === value2;
    });
  }

  selectRow(row: any): void {
    this.selectedRow = row;
  }

  confirmSelection(): void {
    if (this.selectedRow) {
      this.selectedData=this.selectedRow;
      this.dialogRef.close(this.selectedData);
      //console.log('Seleccionado:', this.selectedRow);
    }
  }

  cancel(): void {
    this.selectedRow = null;
    //console.log('Selección cancelada');
    this.dialogRef.close();
  }
}