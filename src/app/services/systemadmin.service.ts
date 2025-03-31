import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { catchError, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Account, Compfile, Syprdfil } from '../models/systemadmin.model';

@Injectable({
  providedIn: 'root'
})
export class SystemadminService {

  constructor(private errorHandler: ErrorHandlerService,private configService: ConfigService,private authService: AuthService,private http: HttpClient) { }
  obtenerDatosPeriodo(id: string): Observable<Syprdfil> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('systemAdmin','getPeriods');
    return this.http.get<Syprdfil>(`${apiURL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }
  actualizarDatosPeriodo(id: string, company:Syprdfil): Observable<Syprdfil> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('systemAdmin','getPeriods');
    return this.http.put<Syprdfil>(`${apiURL}/${id}`,company, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }
  insertarDatosPeriodo(company:Syprdfil): Observable<Syprdfil> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('systemAdmin','getPeriods');
    return this.http.post<Syprdfil>(`${apiURL}`,company, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }
  obtenerDatosCompania(id: string): Observable<Compfile> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('systemAdmin','getCompanies');
    return this.http.get<Compfile>(`${apiURL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }
  guardarDatosCompania(id: string, company:Compfile): Observable<Compfile> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('systemAdmin','getCompanies');
    return this.http.put<Compfile>(`${apiURL}/${id}`,company, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }

  obtenerDatosCuentaContable(id: string): Observable<Account> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('systemAdmin','getAccounts');
    return this.http.get<Account>(`${apiURL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }

  obtenerDatosCuentaCaja(id: string): Observable<Account> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('systemAdmin','getCashAccounts');
    return this.http.get<Account>(`${apiURL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }
}
