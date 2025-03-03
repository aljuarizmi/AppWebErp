import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule,MatCardModule,MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  servers: { server_id: number; server_name: string }[] = [];
  databases: { sy_company: string; sy_company_descr: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      server: ['', Validators.required],
      database: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.authService.getServers().subscribe((data) => (this.servers = data));
  }

  onServerChange() {
    this.databases = []; // Limpiar bases de datos al cambiar de servidor
    const selectedServer = this.servers.find(s => s.server_id === this.loginForm.get('server')?.value);
    if (selectedServer) {
      this.authService.getDatabases(selectedServer.server_id, selectedServer.server_name).subscribe(
        (data) => (this.databases = data),
        () => this.snackBar.open('Error al cargar bases de datos', 'Cerrar', { duration: 3000 })
      );
    }
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      const selectedServer = this.servers.find(s => s.server_id === this.loginForm.get('server')?.value);
      if (!selectedServer) {
        this.snackBar.open('Seleccione un servidor válido', 'Cerrar', { duration: 3000 });
        return;
      }

      const credentials = {
        syUser: this.loginForm.get('username')?.value,
        bizGrpId: selectedServer.server_id,
        serverName: selectedServer.server_name,
        dataBase: this.loginForm.get('database')?.value,
        syUserPsc: this.loginForm.get('password')?.value,
      };
      
      this.authService.login(credentials).subscribe(
        (response) => {
          this.authService.saveToken(response.token);
          this.snackBar.open('Login exitoso', 'Cerrar', { duration: 2000 });
          this.router.navigate(['/principal']);
        },
        (error: HttpErrorResponse) => {
          const errorMsg = error.error?.message || 'Error en login';
          this.snackBar.open(errorMsg, 'Cerrar', { duration: 3000 });
        }
      );
    }
  }
}
