import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Compfile } from '../../../models/systemadmin.model';

@Component({
  selector: 'app-m00-s01-n02',
  imports: [CommonModule,FormsModule],
  templateUrl: './m00s01n02.component.html',
  styleUrl: './m00s01n02.component.css'
})
export class M00S01N02Component {
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
  cargarDatos():void{}
  guardarDatos():void{}
}
