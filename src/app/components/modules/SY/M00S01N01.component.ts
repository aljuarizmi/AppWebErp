import { NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BuscadorComponent, BusquedaExitosaEvent } from '../../usercontrol/buscador.component';
import { SystemadminService } from '../../../services/systemadmin.service';
import { Compfile } from '../../../models/systemadmin.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-m00-s01-n01',
  imports: [CommonModule,FormsModule,BuscadorComponent,ReactiveFormsModule],
  templateUrl: './M00S01N01.component.html',
  /*styleUrl: './M00S01N01.component.css'*/
  styles: [`.container {
    max-width: 720px;
    margin: auto;
  }
  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  `]
})
export class M00S01N01Component implements OnInit{
  checkboxValue: boolean = false;  // Inicializa en false o en true, según lo que desees
  selectedOption: string = '';  // Para el comboBox
  username: string = '';        // Para el input de usuario

  //formGroup: FormGroup;
  //fields = Array.from({ length: 16 }, (_, i) => ({ name: `field${i + 1}`, label: `Campo ${i + 1}`, value: '' }));
  compKey1 = '';
  rptName = '';
  displayName = '';
  addrLine1 = '';
  addrLine2 = '';
  addrLine3 = '';
  phoneNo = '';
  glAcctLev1Dgts = 0;
  glAcctLev2Dgts = 0;
  glAcctLev3Dgts = 0;
  startJnlHistNo = 0;
  typeEconomicActivity = '';
  employees = 0;
  eiCusNo = '';
  ratePct1 = 0;
  ratePct2 = 0;
  company!:Compfile;
  titulo='';
  constructor(private adminService: SystemadminService,private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    //console.log("this.route.queryParamMap",this.route);
    this.route.queryParamMap.subscribe(params=>{
      //console.log("this.route.queryParamMap",this.route);
      this.titulo=params.get('syMenuName')||'';
    });
    this.cargarDatos();
  }
  cargarDatos():void{
    this.adminService.obtenerDatosCompania('1').subscribe({
      next: (data) => {
        if(data){
          this.company = data;
          //console.log('Empresa cargada: '+this.company+", this.eiCusNo: "+this.eiCusNo);
          this.compKey1=data.compKey1;
          this.rptName = data.rptName;
          this.displayName = data.displayName;
          this.addrLine1 = data.addrLine1;
          this.addrLine2 = data.addrLine2;
          this.addrLine3 = data.addrLine3;
          this.phoneNo = data.phoneNo;
          this.glAcctLev1Dgts = data.glAcctLev1Dgts;
          this.glAcctLev2Dgts = data.glAcctLev2Dgts;
          this.glAcctLev3Dgts = data.glAcctLev3Dgts;
          this.startJnlHistNo = data.startJnlHistNo;
          this.typeEconomicActivity = data.typeEconomicActivity;
          this.employees = data.employees;
          this.eiCusNo = data.eiCusNo;
          this.ratePct1 = data.ratePct1;
          this.ratePct2 = data.ratePct2;
          //console.log('this.company.eiCusNo: '+this.company.eiCusNo+", this.eiCusNo: "+this.eiCusNo);
        }else{
          //console.log('Empresa NO cargada: ',data);
        }
      },
      error: (error) => {
        //console.error('Error al obtener la empresa:', error);
      }
    });
  }
  guardarDatos():void{
    if(confirm("¿Seguro que desea modificar los datos?")){
      this.company.compKey1=this.compKey1;
      this.company.rptName = this.rptName;
      this.company.displayName = this.displayName;
      this.company.addrLine1 = this.addrLine1;
      this.company.addrLine2 = this.addrLine2;
      this.company.addrLine3 = this.addrLine3;
      this.company.phoneNo = this.phoneNo;
      this.company.glAcctLev1Dgts = this.glAcctLev1Dgts;
      this.company.glAcctLev2Dgts = this.glAcctLev2Dgts;
      this.company.glAcctLev3Dgts = this.glAcctLev3Dgts;
      this.company.startJnlHistNo = this.startJnlHistNo;
      this.company.typeEconomicActivity = this.typeEconomicActivity;
      this.company.employees = this.employees;
      this.company.eiCusNo = this.eiCusNo;
      this.company.ratePct1 = this.ratePct1;
      this.company.ratePct2 = this.ratePct2;
      //console.log("this.company.eiCusNo: ",this.company.eiCusNo+",this.eiCusNo: "+this.eiCusNo);
      this.adminService.guardarDatosCompania(this.compKey1,this.company).subscribe({
        next: (data) => {
          if(data){
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
  onBusquedaExitosa(event:BusquedaExitosaEvent){
    this.eiCusNo=event.resultado;
  }
  onSubmit() {
    //console.log(this.formGroup.value);
  }
}
