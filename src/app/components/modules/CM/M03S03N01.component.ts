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
import { MatDialog } from '@angular/material/dialog';
import { M03S03N01EditComponent } from './M03S03N01-Edit.component';

@Component({
  selector: 'app-m03-s03-n01',
  imports: [FormsModule,CommonModule,MatTableModule],
  templateUrl: './M03S03N01.component.html',
  styleUrl: './M03S03N01.component.css'
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
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  pages: number[] = [];
  titulo='';
  constructor(private currencyService: CurrenciesService,private route: ActivatedRoute,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params=>{
      //console.log("this.route.queryParamMap",this.route);
      this.titulo=params.get('syMenuName')||'';
    });
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
      if(data && data.length > 0){
        this.dataSource=data;
        this.totalItems = data[0].totalReg;
        this.totalRegistros=this.totalItems;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
        //console.log("data[0].totalReg:"+data[0].totalReg);
        //console.log("this.totalPages:"+this.totalPages);
      }else{
        this.dataSource=[];
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
    this.currentPage=0;
    this.listarTispoCambioPeriodo();
  }
  onAnioChange() {
    this.currentPage=0;
    this.listarTispoCambioPeriodo();
  }
  goToPage(page: number) {
    if (page < 0 || page > this.totalPages) return;
    this.currentPage = page;
    this.listarTispoCambioPeriodo();
  }
  agregar() {
    this.ModalDialogSearch();
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

  
  ModalDialogSearch(){
      const dialogRef = this.dialog.open(M03S03N01EditComponent,{
        disableClose:false,
        autoFocus:true,
        closeOnNavigation:false,
        maxWidth: '60vw',
        width: '60%',
        height: 'auto',
        data:{
          
        }
      });//codigo que abre la ventana modal
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.listarTispoCambioPeriodo();
        } else {
          //console.log('El usuario canceló la selección.',result);
        }
      });
    }
}
