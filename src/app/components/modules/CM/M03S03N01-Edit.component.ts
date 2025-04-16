import { Component, inject, OnInit } from '@angular/core';
import { BuscadorComponent } from '../../usercontrol/buscador.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomDateAdapterService } from '../../../services/customdateadapter.service';
import { BusquedaExitosaEvent } from '../../../models/systemadmin.model';
import { CurrenciesService } from '../../../services/currencies.service';
import { Cmcurrat } from '../../../models/currencies.model';
import { MatDialogRef } from '@angular/material/dialog';
const CUSTOM_DATE_FORMATS: MatDateFormats = {
  parse: { dateInput: 'dd/MM/yyyy' },
  display: { dateInput: 'dd/MM/yyyy', monthYearLabel: 'MM yyyy', dateA11yLabel: 'dd/MM/yyyy', monthYearA11yLabel: 'MMMM yyyy' }
};
@Component({
  selector: 'app-m03-s03-n01-edit',
  imports: [BuscadorComponent,MatDatepickerModule,FormsModule,MatNativeDateModule,MatFormFieldModule,MatInputModule],
  templateUrl: './M03S03N01-Edit.component.html',
  styleUrl: './M03S03N01-Edit.component.css',
  providers: [
      { provide: DateAdapter, useClass: CustomDateAdapterService },
      { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }
    ]
})
export class M03S03N01EditComponent implements OnInit{
  rateExtEfe: Date|null = null;
  currCd: string='';
  currRtEffDt: number=0;
  currRt: number=0;
  rateVenDia: number=0;
  rateComPub: number=0;
  rateVenPub: number=0;
  rateComPro: number=0;
  rateVenPro: number=0;
  rateComCanc: number=0;
  rateVenCanc: number=0;
  tipoCambio:Cmcurrat={currCd: '',
    rateExtCode: '',
    currRtEffDt: 0,
    rateExtEfe: 0,
    currRt: 0,
    rateVenDia: 0,
    rateComPub: 0,
    rateVenPub: 0,
    rateComPro: 0,
    rateVenPro: 0,
    rateComCanc: 0,
    rateVenCanc: 0,
    rowRank: 0,
    totalReg: 0,
    compra: 0,
    venta: 0,
    origen: '',
    moneda: '',
    fecha: ''};
  readonly dialogRef = inject(MatDialogRef<M03S03N01EditComponent>);
  constructor(private currencyService: CurrenciesService){
    
  }
  ngOnInit(): void {

  }
  guardarTipoCambio(){
    if(this.validarDatos()){
      if(confirm("¿Seguro que desea registrar el tipo de cambio?")){
        this.tipoCambio.rateExtCode=this.currCd;
        this.tipoCambio.rateExtEfe=Number(this.convertirDateAString(this.rateExtEfe));
        this.tipoCambio.currRt=this.currRt;
        this.tipoCambio.rateVenDia=this.rateVenDia;
        this.tipoCambio.rateComPub=this.rateComPub;
        this.tipoCambio.rateVenPub=this.rateVenPub;
        this.tipoCambio.rateComPro=this.rateComPro;
        this.tipoCambio.rateVenPro=this.rateVenPro;
        this.tipoCambio.rateComCanc=this.rateComCanc;
        this.tipoCambio.rateVenCanc=this.rateVenCanc;
        this.currencyService.insertarTipoCambio(this.tipoCambio).subscribe({next:(data: Cmcurrat) => {
          if(data){
            alert("Tipo de cambio registrado correctamente");
            this.dialogRef.close(true);
          }else{
            
          }
        },
        error: (error) => {
          alert(error);
        }
      });
      }
      
    }else{

    }
  }
  validarDatos():boolean{
    let blnOK:boolean=true;

    return blnOK;
  }
  onBusquedaExitosa(event:BusquedaExitosaEvent){
      this.currCd=event.resultado.code;
  }
  convertirDateAString(fecha: Date|null): string {
    if (!fecha) return '';
    const año = fecha.getFullYear();
    const mes = ('0' + (fecha.getMonth() + 1)).slice(-2); // Asegurar 2 dígitos
    const dia = ('0' + fecha.getDate()).slice(-2); // Asegurar 2 dígitos
    return `${año}${mes}${dia}`;
  }
  buscarSunat(){
    //let periodo=`${this.anioSeleccionado}${this.mesSeleccionado.toString().padStart(2, '0')}`;
    let fecha=this.convertirDateAString(this.rateExtEfe);
    this.currencyService.obtenerTipoCambioSunat(fecha).subscribe({next:(data: Cmcurrat) => {
      if(data){
        this.currRt=data.compra;
        this.rateVenDia=data.venta;
        this.rateComPub=data.compra;
        this.rateVenPub=data.venta;
        this.rateComPro=data.compra;
        this.rateVenPro=data.venta;
        this.rateComCanc=data.compra;
        this.rateVenCanc=data.venta;
        this.currCd=data.moneda;
        //console.log("data[0].totalReg:"+data[0].totalReg);
        //console.log("this.totalPages:"+this.totalPages);
      }else{
        
      }
      
    },
    error: (error) => {
      alert(error);
    }
  });
  }
}
