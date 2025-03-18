import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
//import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BuscadorComponent } from '../../usercontrol/buscador.component';
import { MatCard } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-m00-s01-n01',
  imports: [MatFormField,MatLabel,MatCard,MatCheckboxModule,MatGridListModule,MatButtonModule,MatSelectModule,MatFormFieldModule,MatInputModule,CommonModule,FormsModule,BuscadorComponent,ReactiveFormsModule],
  templateUrl: './M00S01N01.component.html',
  /*styleUrl: './M00S01N01.component.css'*/
  styles: [`.container {
    max-width: 700px;
    margin: auto;
  }
  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  `]
})
export class M00S01N01Component {
  checkboxValue: boolean = false;  // Inicializa en false o en true, según lo que desees
  selectedOption: string = '';  // Para el comboBox
  username: string = '';        // Para el input de usuario

  formGroup: FormGroup;
  fields = Array.from({ length: 16 }, (_, i) => ({ name: `field${i + 1}`, label: `Campo ${i + 1}`, value: '' }));
  field1 = '';
  field2 = '';
  field3 = '';
  field4 = '';
  field5 = '';
  field6 = '';
  field7 = '';
  field8 = '';
  field9 = '';
  field10 = '';
  field11 = '';
  field12 = '';
  field13 = '';
  field14 = '';
  field15 = '';
  field16 = '';
  constructor() {
    this.formGroup = new FormGroup(
      this.fields.reduce((acc, field) => {
        acc[field.name] = new FormControl('');
        return acc;
      }, {} as { [key: string]: FormControl })
    );
  }
  onBusquedaExitosa(event:any){}
  onSubmit() {
    console.log(this.formGroup.value);
  }
}
