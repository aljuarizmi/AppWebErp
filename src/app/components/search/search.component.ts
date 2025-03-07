/*import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatOption } from '@angular/material/core';
import { CommonModule } from '@angular/common';
//import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
//import { ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ApiResponse {
  listFiltroDatoBuscar: string[];
  listFiltroTipoBuscar: string[];
  listCampos: string[];
  table: string;
  //codigoPrincipal:String;
  //campoDescripcion:string;
}

@Component({
  selector: 'app-search',
  imports: [MatDialogModule,MatButtonModule,MatRadioModule,MatFormFieldModule,MatInputModule,MatIconModule,MatSlideToggleModule,ReactiveFormsModule,MatTableModule,MatOption,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  //private apiURL='https://localhost:7113/api/sy/managment/search';
  //tablaHTML: string = '';
  tablaHTML: SafeHtml = '';
  data = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<SearchComponent>);
  //formGroup!:FormGroup;
  constructor(private fb:FormBuilder,private authService: AuthService,private sanitizer: DomSanitizer,private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
    console.log("Iniciando form");
    this.initForm();
  }
displayedColumns: string[] = ['columna1', 'columna2'];
dataSource = new MatTableDataSource([
  { columna1: 'Dato 1', columna2: 'Valor 1' },
  { columna1: 'Dato 2', columna2: 'Valor 2' }
]);

listaBuscadores = [
  { label: 'Opción 1', value: 'opcion1' },
  { label: 'Opción 2', value: 'opcion2' }
];

formGroup = new FormGroup({
  buscador: new FormControl(''),
  filas: new FormControl(20)
});
  initForm(){
    
    this.obtenerDatosBuscador();
  }

  obtenerDatosBuscador() {
    const body = {
      searchFieldId: 'AR-MANTAB',
      searchNo: 0,
      searchNumeroRegistros: '1',
      sqlfilter: 'I',
      campoDescripcion:'artabla_descripcion',
      codigoPrincipal:'artabla_codigo',
      habilitarWhere:true,
      busquedaConFiltro:'SI'
    };
    this.authService.obtenerDatosBuscador<ApiResponse>(body).subscribe(
      (data) => {
        this.tablaHTML = data.table
        //this.tablaHTML = this.sanitizer.bypassSecurityTrustHtml(data.table);
        //this.cdr.detectChanges(); // Forzar actualización
      },
      () => console.log("Se obtuvo datos")
    );
  }

  cerrarDialogo() {
    this.dialogRef.close();
  }
  F_onKeyPressBusquedaEnter(value:any){}
  F_GuardarFiltro(value:any){}
  SelectFileclick(){}
  F_SelectFileclick_iframe(){}
}
*/


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-search',
  imports: [MatDialogModule,MatButtonModule,MatRadioModule,MatFormFieldModule,MatInputModule,MatIconModule,MatSlideToggleModule,ReactiveFormsModule,MatTableModule,MatOption,CommonModule,MatSelectModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = [];
  searchForm: FormGroup;
  searchOptions = [{ id: 1, name: '1 A/P Ship Via' }];
  rowLimits = [10, 50, 100];
  columns = [{ key: 'sy_terms_cd', label: 'Código' }, { key: 'ship_via_desc', label: 'Descripción' }];
  data = new MatTableDataSource<any>([]);
  filteredData = new MatTableDataSource<any>([]);
  filterControls: { [key: string]: FormControl } = {};
  selectedRow: any;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchType: [1],
      rowLimit: [10]
    });
  }

  ngOnInit(): void {
    this.columns.forEach(col => {
      this.filterControls[col.key] = new FormControl('');
    });

    // Inicializa las columnas para la tabla
    this.displayedColumns = this.columns.map(c => c.key);
    this.search();

    //Para obtener los filtros de forma dinamica
    //El servicio para obtener las columnas es el mismo de la consulta general que llena la tabla
    /*getColumns(): Observable<any[]> {
      return this.http.get<any[]>('https://tuapi.com/obtenerColumnas');
    }*/

    /*this.dataService.getColumns().subscribe(columns => {
      this.columns = columns;
      this.displayedColumns = this.columns.map(c => c.key);
      
      // Inicializar los filtros dinámicamente
      this.columns.forEach(col => {
        this.filterControls[col.key] = new FormControl('');
      });
    });*/
  }

  search(): void {
    // Simulación de consulta a la BD
    this.data.data = [
      { sy_terms_cd: 'AER', ship_via_desc: 'AEREO' },
      { sy_terms_cd: 'MAR', ship_via_desc: 'MARITIMO' },
      { sy_terms_cd: 'TAR', ship_via_desc: 'TERRESTRE' },
      { sy_terms_cd: 'TER', ship_via_desc: 'TERRESTRE' },
      { sy_terms_cd: 'TIR', ship_via_desc: 'TERRESTRE' },
      { sy_terms_cd: 'TOR', ship_via_desc: 'TERRESTRE' },
      { sy_terms_cd: 'TUR', ship_via_desc: 'TERRESTRE' }
    ];
    this.filteredData.data = this.data.data;
  }

  applyFilters(): void {
    let filtered = this.data.data;
    this.columns.forEach(col => {
      const filterValue = this.filterControls[col.key].value?.toLowerCase();
      if (filterValue) {
        filtered = filtered.filter(row => row[col.key].toLowerCase().includes(filterValue));
      }
    });
    this.filteredData.data = filtered;

    //Para que los filtros vayan a la bd
    /*getFilteredData(filters: any): Observable<any[]> {
      let params = new HttpParams();
      Object.keys(filters).forEach(key => {
        if (filters[key]) {
          params = params.set(key, filters[key]);
        }
      });
      return this.http.get<any[]>('https://tuapi.com/filtrarDatos', { params });
    }*/

      //Se hace la modificacion a la logica de filtrar
      /*const filters: any = {};
    this.columns.forEach(col => {
      const filterValue = this.filterControls[col.key].value?.trim();
      if (filterValue) {
        filters[col.key] = filterValue;
      }
    });

    this.dataService.getFilteredData(filters).subscribe(filteredResults => {
      this.filteredData.data = filteredResults;
    });
    */
  }

  selectRow(row: any): void {
    this.selectedRow = row;
  }

  confirmSelection(): void {
    if (this.selectedRow) {
      console.log('Seleccionado:', this.selectedRow);
    }
  }

  cancel(): void {
    this.selectedRow = null;
    console.log('Selección cancelada');
  }
}