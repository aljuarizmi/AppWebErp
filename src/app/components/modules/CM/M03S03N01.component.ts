import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CurrenciesService } from '../../../services/currencies.service';
import { ActivatedRoute } from '@angular/router';
import { Cmcurrat } from '../../../models/currencies.model';

@Component({
  selector: 'app-m03-s03-n01',
  imports: [FormsModule/*,MatFormField,MatLabel,MatPaginator,MatIcon,MatTable,MatOption*/,CommonModule,MatTableModule],
  templateUrl: './m03s03n01.component.html',
  styleUrl: './m03s03n01.component.css'
})
export class M03S03N01Component implements OnInit{
  anios:number[] = [];
  meses = [{ nombre: 'Enero', valor: 1 },
    { nombre: 'Febrero', valor: 2 },
    { nombre: 'Marzo', valor: 3 },
    { nombre: 'Abril', valor: 4 },
    { nombre: 'Mayo', valor: 5 },
    { nombre: 'Junio', valor: 6 },
    { nombre: 'Julio', valor: 7 },
    { nombre: 'Agosto', valor: 8 },
    { nombre: 'Septiembre', valor: 9 },
    { nombre: 'Octubre', valor: 10 },
    { nombre: 'Noviembre', valor: 11 },
    { nombre: 'Diciembre', valor: 12 }];
  anioSeleccionado = 0;
  mesSeleccionado = 0;

  totalRegistros = 0;
  dataSource:any[]=[];
  /*dataSource = new MatTableDataSource<any>([{ curr_cd: 'USD', valor: 1.00, fecha: '2025-04-01' },
    { curr_cd: 'EUR', valor: 0.91, fecha: '2025-04-02' },
    { curr_cd: 'JPY', valor: 151.25, fecha: '2025-04-03' },
    { curr_cd: 'PEN', valor: 3.75, fecha: '2025-04-04' }]);*/
  displayedColumns: string[] = ['acciones', 'curr_cd']; // agrega aquí tus campos

  currentPage = 0;
  pageSize = 15;
  totalItems = 0;
  totalPages = 0;
  pages: number[] = [];

  constructor(private currencyService: CurrenciesService,private route: ActivatedRoute) { }
  ngOnInit(): void {
    const fechaActual = new Date();
    this.mesSeleccionado = fechaActual.getMonth() + 1;
    for (let i = 0; i < 10; i++) {
      this.anios.push(fechaActual.getFullYear() - i); // años hacia atrás
    }
    this.anioSeleccionado = fechaActual.getFullYear();
    this.listarTispoCambioPeriodo();
  }
  listarTispoCambioPeriodo(){
    let periodo=`${this.anioSeleccionado}${this.mesSeleccionado.toString().padStart(2, '0')}`;
    this.currencyService.obtenerTiposCambioPeriodo(periodo,this.pageSize,this.currentPage,'').subscribe({next:(data: Cmcurrat[]) => {
      if(data){
        this.dataSource=data;
        this.totalItems = data[0].totalReg;
        this.totalRegistros=this.totalItems;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
        console.log("data[0].totalReg:"+data[0].totalReg);
        console.log("this.totalPages:"+this.totalPages);
      }else{
        this.totalItems = 0;
        this.totalPages = 0;
        this.pages = [];
        this.totalRegistros=0;
      }
      
    },
    error: (error) => {
      alert(error);
    }
  });
  }
  onMesChange() {
    this.listarTispoCambioPeriodo();
  }
  onAnioChange() {
    this.listarTispoCambioPeriodo();
  }
  goToPage(page: number) {
    if (page < 0 || page > this.totalPages) return;
    this.currentPage = page;
    this.listarTispoCambioPeriodo();
  }
  agregar() {
    console.log('Agregar clicked');
  }

  eliminar(row: any) {
    console.log('Eliminar:', row);
  }

  editar(row: any) {
    console.log('Editar:', row);
  }

  onPageChange(event: any) {
    console.log('Page changed', event);
  }

  onSubmit() {
    // lógica para enviar filtros
  }
}
