import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
//import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscadorComponent } from '../../usercontrol/buscador.component';
@Component({
  selector: 'app-m00-s01-n01',
  imports: [/*MatFormField,MatLabel,MatSelect,*/MatCheckboxModule,/*MatOption,*/MatButtonModule,MatSelectModule,MatFormFieldModule,MatInputModule,CommonModule,FormsModule,BuscadorComponent],
  templateUrl: './M00S01N01.component.html',
  styleUrl: './M00S01N01.component.css'
})
export class M00S01N01Component {
  checkboxValue: boolean = false;  // Inicializa en false o en true, según lo que desees
  selectedOption: string = '';  // Para el comboBox
  username: string = '';        // Para el input de usuario
  onBusquedaExitosa(event:any){}
}
