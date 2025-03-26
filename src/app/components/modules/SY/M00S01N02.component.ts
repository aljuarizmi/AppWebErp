import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomDateAdapterService } from '../../../services/customdateadapter.service';
import { SystemadminService } from '../../../services/systemadmin.service';
import { ActivatedRoute } from '@angular/router';
import { Syprdfil } from '../../../models/systemadmin.model';

const CUSTOM_DATE_FORMATS: MatDateFormats = {
  parse: { dateInput: 'dd/MM/yyyy' },
  display: { dateInput: 'dd/MM/yyyy', monthYearLabel: 'MM yyyy', dateA11yLabel: 'dd/MM/yyyy', monthYearA11yLabel: 'MMMM yyyy' }
};

@Component({
  selector: 'app-m00-s01-n02',
  imports: [CommonModule,FormsModule,MatDatepickerModule,MatNativeDateModule,MatFormFieldModule,MatInputModule],
  templateUrl: './m00s01n02.component.html',
  styleUrl: './m00s01n02.component.css',
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapterService },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }
  ]
})
export class M00S01N02Component implements OnInit{
  prdKey: string = '0';  
  strDt1: Date|null = null;
  endDt1: Date|null = null;
  strDt2: Date|null = null;
  endDt2: Date|null = null;
  strDt3: Date|null = null;
  endDt3: Date|null = null;
  strDt4: Date|null = null;
  endDt4: Date|null = null;
  strDt5: Date|null = null;
  endDt5: Date|null = null;
  strDt6: Date|null = null;
  endDt6: Date|null = null;
  strDt7: Date|null = null;
  endDt7: Date|null = null;
  strDt8: Date|null = null;
  endDt8: Date|null = null;
  strDt9: Date|null = null;
  endDt9: Date|null = null;
  strDt10: Date|null = null;
  endDt10: Date|null = null;
  strDt11: Date|null = null;
  endDt11: Date|null = null;
  strDt12: Date|null = null;
  endDt12: Date|null = null;
  strDt13: Date|null = null;
  endDt13: Date|null = null;
  noOfValPrd: number = 0;  
  defPrdCd: string = '';  
  tmpYrClsFg: string = '';  
  warnOrPrev: string = '';  
  currentPrd: number = 0;  
  wrnPrvGlPrdFg1: string = '';  
  wrnPrvGlPrdFg2: string = '';  
  wrnPrvGlPrdFg3: string = '';  
  wrnPrvGlPrdFg4: string = '';  
  wrnPrvGlPrdFg5: string = '';  
  wrnPrvGlPrdFg6: string = '';  
  wrnPrvGlPrdFg7: string = '';  
  wrnPrvGlPrdFg8: string = '';  
  wrnPrvGlPrdFg9: string = '';  
  wrnPrvGlPrdFg10: string = '';  
  wrnPrvGlPrdFg11: string = '';  
  wrnPrvGlPrdFg12: string = '';  
  wrnPrvGlPrdFg13: string = '';  
  filler0001: string = '';  
  fechaInvalida: boolean = false;
  periodo!:Syprdfil;
  titulo='';
  proceso:number=0;
  anio:number=0;
  fechaActual: Date = new Date();
  startEne:Date=new Date();
  startFeb:Date=new Date();
  startMar:Date=new Date();
  startAbr:Date=new Date();
  startMay:Date=new Date();
  startJun:Date=new Date();
  startJul:Date=new Date();
  startAgo:Date=new Date();
  startSet:Date=new Date();
  startOct:Date=new Date();
  startNov:Date=new Date();
  startDic:Date=new Date();
  constructor(private adminService: SystemadminService,private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.anio=this.fechaActual.getFullYear();
    this.calcularRangos();
    this.route.queryParamMap.subscribe(params=>{
      this.titulo=params.get('syMenuName')||'';
    });
  }
  cargarDatos():void{
    this.adminService.obtenerDatosPeriodo(this.prdKey).subscribe({
      next: (data) => {
        if(data){
          this.periodo = data;
          this.prdKey=data.prdKey;
          this.strDt1=this.convertirStringADate(data.strDt1.toString());
          this.endDt1 =this.convertirStringADate(data.endDt1.toString());
          this.strDt2 =this.convertirStringADate(data.strDt2.toString());
          this.endDt2 =this.convertirStringADate(data.endDt2.toString());
          this.strDt3 =this.convertirStringADate(data.strDt3.toString());
          this.endDt3 =this.convertirStringADate(data.endDt3.toString());
          this.strDt4 =this.convertirStringADate(data.strDt4.toString());
          this.endDt4 =this.convertirStringADate(data.endDt4.toString());
          this.strDt5 =this.convertirStringADate(data.strDt5.toString());
          this.endDt5 =this.convertirStringADate(data.endDt5.toString());
          this.strDt6 =this.convertirStringADate(data.strDt6.toString());
          this.endDt6 =this.convertirStringADate(data.endDt6.toString());
          this.strDt7 =this.convertirStringADate(data.strDt7.toString());
          this.endDt7 =this.convertirStringADate(data.endDt7.toString());
          this.strDt8 =this.convertirStringADate(data.strDt8.toString());
          this.endDt8 =this.convertirStringADate(data.endDt8.toString());
          this.strDt9 =this.convertirStringADate(data.strDt9.toString());
          this.endDt9 =this.convertirStringADate(data.endDt9.toString());
          this.strDt10 =this.convertirStringADate(data.strDt10.toString());
          this.endDt10 =this.convertirStringADate(data.endDt10.toString());
          this.strDt11 =this.convertirStringADate(data.strDt11.toString());
          this.endDt11 =this.convertirStringADate(data.endDt11.toString());
          this.strDt12 =this.convertirStringADate(data.strDt12.toString());
          this.endDt12 =this.convertirStringADate(data.endDt12.toString());
          this.strDt13 =this.convertirStringADate(data.strDt13.toString());
          this.endDt13 =this.convertirStringADate(data.endDt13.toString());
          this.noOfValPrd = data.noOfValPrd;
          this.currentPrd = data.currentPrd;
          this.wrnPrvGlPrdFg1 = data.wrnprvGlprdFg1;
          this.wrnPrvGlPrdFg2 = data.wrnprvGlprdFg2;
          this.wrnPrvGlPrdFg3 = data.wrnprvGlprdFg3;
          this.wrnPrvGlPrdFg4 = data.wrnprvGlprdFg4;
          this.wrnPrvGlPrdFg5 = data.wrnprvGlprdFg5;
          this.wrnPrvGlPrdFg6 = data.wrnprvGlprdFg6;
          this.wrnPrvGlPrdFg7 = data.wrnprvGlprdFg7;
          this.wrnPrvGlPrdFg8 = data.wrnprvGlprdFg8;
          this.wrnPrvGlPrdFg9 = data.wrnprvGlprdFg9;
          this.wrnPrvGlPrdFg10 = data.wrnprvGlprdfg10;
          this.wrnPrvGlPrdFg11 = data.wrnprvGlprdfg11;
          this.wrnPrvGlPrdFg12 = data.wrnprvGlprdfg12;
          this.wrnPrvGlPrdFg13 = data.wrnprvGlprdfg13;
          this.proceso=2;//actualizar
        }else{
          console.log('Periodo NO cargado: ',data);
          this.periodo= {
            prdKey: this.prdKey,
            strDt1: 0,
            endDt1: 0,
            strDt2: 0,
            endDt2: 0,
            strDt3: 0,
            endDt3: 0,
            strDt4: 0,
            endDt4: 0,
            strDt5: 0,
            endDt5: 0,
            strDt6: 0,
            endDt6: 0,
            strDt7: 0,
            endDt7: 0,
            strDt8: 0,
            endDt8: 0,
            strDt9: 0,
            endDt9: 0,
            strDt10: 0,
            endDt10: 0,
            strDt11: 0,
            endDt11: 0,
            strDt12: 0,
            endDt12: 0,
            strDt13: 0,
            endDt13: 0,
            noOfValPrd: 0,
            defPrdCd: '',
            tmpYrClsFg: '',
            warnOrPrev: '',
            currentPrd: 0,
            wrnprvGlprdFg1: '',
            wrnprvGlprdFg2: '',
            wrnprvGlprdFg3: '',
            wrnprvGlprdFg4: '',
            wrnprvGlprdFg5: '',
            wrnprvGlprdFg6: '',
            wrnprvGlprdFg7: '',
            wrnprvGlprdFg8: '',
            wrnprvGlprdFg9: '',
            wrnprvGlprdfg10: '',
            wrnprvGlprdfg11: '',
            wrnprvGlprdfg12: '',
            wrnprvGlprdfg13: '',
            filler0001: '',
          };
          this.proceso=1;//insertar

          this.strDt1=null;
          this.endDt1 =null;
          this.strDt2 =null;
          this.endDt2 =null;
          this.strDt3 =null;
          this.endDt3 =null;
          this.strDt4 =null;
          this.endDt4 =null;
          this.strDt5 =null;
          this.endDt5 =null;
          this.strDt6 =null;
          this.endDt6 =null;
          this.strDt7 =null;
          this.endDt7 =null;
          this.strDt8 =null;
          this.endDt8 =null;
          this.strDt9 =null;
          this.endDt9 =null;
          this.strDt10 =null;
          this.endDt10 =null;
          this.strDt11 =null;
          this.endDt11 =null;
          this.strDt12 =null;
          this.endDt12 =null;
          this.strDt13 =null;
          this.endDt13 =null;
          this.noOfValPrd = 0;
          this.currentPrd = 0;
          this.wrnPrvGlPrdFg1 = '';
          this.wrnPrvGlPrdFg2 = '';
          this.wrnPrvGlPrdFg3 = '';
          this.wrnPrvGlPrdFg4 = '';
          this.wrnPrvGlPrdFg5 = '';
          this.wrnPrvGlPrdFg6 = '';
          this.wrnPrvGlPrdFg7 = '';
          this.wrnPrvGlPrdFg8 = '';
          this.wrnPrvGlPrdFg9 = '';
          this.wrnPrvGlPrdFg10 = '';
          this.wrnPrvGlPrdFg11 = '';
          this.wrnPrvGlPrdFg12 = '';
          this.wrnPrvGlPrdFg13 = '';
        }
      },
      error: (error) => {
        alert(error);
      }
    });
  }
  guardarDatos():void{
    if(this.prdKey=='0'){
      alert("Debe seleccionar un módulo");
    }else{
      if(confirm("¿Seguro de registrar los datos?")){
        this.periodo.prdKey=this.prdKey;
        this.periodo.strDt1=Number(this.convertirDateAString(this.strDt1));
        this.periodo.endDt1 =Number(this.convertirDateAString(this.endDt1));
        this.periodo.strDt2 =Number(this.convertirDateAString(this.strDt2));
        this.periodo.endDt2 =Number(this.convertirDateAString(this.endDt2));
        this.periodo.strDt3 =Number(this.convertirDateAString(this.strDt3));
        this.periodo.endDt3 =Number(this.convertirDateAString(this.endDt3));
        this.periodo.strDt4 =Number(this.convertirDateAString(this.strDt4));
        this.periodo.endDt4 =Number(this.convertirDateAString(this.endDt4));
        this.periodo.strDt5 =Number(this.convertirDateAString(this.strDt5));
        this.periodo.endDt5 =Number(this.convertirDateAString(this.endDt5));
        this.periodo.strDt6 =Number(this.convertirDateAString(this.strDt6));
        this.periodo.endDt6 =Number(this.convertirDateAString(this.endDt6));
        this.periodo.strDt7 =Number(this.convertirDateAString(this.strDt7));
        this.periodo.endDt7 =Number(this.convertirDateAString(this.endDt7));
        this.periodo.strDt8 =Number(this.convertirDateAString(this.strDt8));
        this.periodo.endDt8 =Number(this.convertirDateAString(this.endDt8));
        this.periodo.strDt9 =Number(this.convertirDateAString(this.strDt9));
        this.periodo.endDt9 =Number(this.convertirDateAString(this.endDt9));
        this.periodo.strDt10 =Number(this.convertirDateAString(this.strDt10));
        this.periodo.endDt10 =Number(this.convertirDateAString(this.endDt10));
        this.periodo.strDt11 =Number(this.convertirDateAString(this.strDt11));
        this.periodo.endDt11 =Number(this.convertirDateAString(this.endDt11));
        this.periodo.strDt12 =Number(this.convertirDateAString(this.strDt12));
        this.periodo.endDt12 =Number(this.convertirDateAString(this.endDt12));
        this.periodo.strDt13 =Number(this.convertirDateAString(this.strDt13));
        this.periodo.endDt13 =Number(this.convertirDateAString(this.endDt13));
        this.periodo.noOfValPrd = this.noOfValPrd;
        this.periodo.currentPrd = this.currentPrd;
        this.periodo.wrnprvGlprdFg1 = this.wrnPrvGlPrdFg1;
        this.periodo.wrnprvGlprdFg2 = this.wrnPrvGlPrdFg2;
        this.periodo.wrnprvGlprdFg3 = this.wrnPrvGlPrdFg3;
        this.periodo.wrnprvGlprdFg4 = this.wrnPrvGlPrdFg4;
        this.periodo.wrnprvGlprdFg5 = this.wrnPrvGlPrdFg5;
        this.periodo.wrnprvGlprdFg6 = this.wrnPrvGlPrdFg6;
        this.periodo.wrnprvGlprdFg7 = this.wrnPrvGlPrdFg7;
        this.periodo.wrnprvGlprdFg8 = this.wrnPrvGlPrdFg8;
        this.periodo.wrnprvGlprdFg9 = this.wrnPrvGlPrdFg9;
        this.periodo.wrnprvGlprdfg10 = this.wrnPrvGlPrdFg10;
        this.periodo.wrnprvGlprdfg11 = this.wrnPrvGlPrdFg11;
        this.periodo.wrnprvGlprdfg12 = this.wrnPrvGlPrdFg12;
        this.periodo.wrnprvGlprdfg13 = this.wrnPrvGlPrdFg13;
        if(this.proceso==1){
          this.adminService.insertarDatosPeriodo(this.periodo).subscribe({
            next: (data) => {
              if(data){
                this.proceso=0;
                alert("Datos insertados");
              }
              if(data){
                //this.company = data;
                //console.log('Empresa cargada:', this.company);
                //this.compKey1=data.compKey1;
              }else{
                //console.log('Empresa NO cargada: ',data);
              }
            },
            error: (error) => {
              alert(error);
              //console.error('Error al obtener la empresa:', error);
            }
          });
        }else{
          if(this.proceso==2){
            this.adminService.actualizarDatosPeriodo(this.prdKey,this.periodo).subscribe({
              next: (data) => {
                if(data){
                  this.proceso=0;
                  alert("Datos actualizados");
                }
                if(data){
                  //this.company = data;
                  //console.log('Empresa cargada:', this.company);
                  //this.compKey1=data.compKey1;
                }else{
                  //console.log('Empresa NO cargada: ',data);
                }
              },
              error: (error) => {
                alert(error);
                //console.error('Error al obtener la empresa:', error);
              }
            });
          }
        }
      }
    }
  }
  onModuleChange() {
    this.cargarDatos();
  }
  convertirStringADate(fechaStr: string): Date|null {
    if (!fechaStr || fechaStr.length !== 8) return null;
    const año = +fechaStr.substring(0, 4);
    const mes = +fechaStr.substring(4, 6) - 1; // Mes en JavaScript comienza en 0
    const dia = +fechaStr.substring(6, 8);
    return new Date(año, mes, dia);
  }
  convertirDateAString(fecha: Date|null): string {
    if (!fecha) return '';
    const año = fecha.getFullYear();
    const mes = ('0' + (fecha.getMonth() + 1)).slice(-2); // Asegurar 2 dígitos
    const dia = ('0' + fecha.getDate()).slice(-2); // Asegurar 2 dígitos
    return `${año}${mes}${dia}`;
  }
  calcularFechas():void{
    if(this.anio.toString()==''){
      alert('Ingrese el año');
    }else{
      this.strDt1=this.convertirStringADate(this.anio.toString()+'0101');
      this.endDt1 =this.convertirStringADate(this.anio.toString()+'0131');
      this.strDt2 =this.convertirStringADate(this.anio.toString()+'0201');
      this.endDt2 =this.convertirStringADate(this.anio.toString()+'0228');
      this.strDt3 =this.convertirStringADate(this.anio.toString()+'0301');
      this.endDt3 =this.convertirStringADate(this.anio.toString()+'0331');
      this.strDt4 =this.convertirStringADate(this.anio.toString()+'0401');
      this.endDt4 =this.convertirStringADate(this.anio.toString()+'0430');
      this.strDt5 =this.convertirStringADate(this.anio.toString()+'0501');
      this.endDt5 =this.convertirStringADate(this.anio.toString()+'0531');
      this.strDt6 =this.convertirStringADate(this.anio.toString()+'0601');
      this.endDt6 =this.convertirStringADate(this.anio.toString()+'0630');
      this.strDt7 =this.convertirStringADate(this.anio.toString()+'0701');
      this.endDt7 =this.convertirStringADate(this.anio.toString()+'0731');
      this.strDt8 =this.convertirStringADate(this.anio.toString()+'0801');
      this.endDt8 =this.convertirStringADate(this.anio.toString()+'0831');
      this.strDt9 =this.convertirStringADate(this.anio.toString()+'0901');
      this.endDt9 =this.convertirStringADate(this.anio.toString()+'0930');
      this.strDt10 =this.convertirStringADate(this.anio.toString()+'1001');
      this.endDt10 =this.convertirStringADate(this.anio.toString()+'1031');
      this.strDt11 =this.convertirStringADate(this.anio.toString()+'1101');
      this.endDt11 =this.convertirStringADate(this.anio.toString()+'1130');
      this.strDt12 =this.convertirStringADate(this.anio.toString()+'1201');
      this.endDt12 =this.convertirStringADate(this.anio.toString()+'1231');
      this.strDt13 =this.convertirStringADate(this.anio.toString()+'1201');
      this.endDt13 =this.convertirStringADate(this.anio.toString()+'1231');
    }
  }
  calcularRangos(){
    this.startEne = new Date(this.anio, 0, 1);
    this.startFeb = new Date(this.anio, 1, 1);
    this.startMar = new Date(this.anio, 2, 1);
    this.startAbr = new Date(this.anio, 3, 1);
    this.startMay = new Date(this.anio, 4, 1);
    this.startJun = new Date(this.anio, 5, 1);
    this.startJul = new Date(this.anio, 6, 1);
    this.startAgo = new Date(this.anio, 7, 1);
    this.startSet = new Date(this.anio, 8, 1);
    this.startOct = new Date(this.anio, 9, 1);
    this.startNov = new Date(this.anio, 10, 1);
    this.startDic = new Date(this.anio, 11, 1);
  }
}
