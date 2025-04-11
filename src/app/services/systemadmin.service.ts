import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { catchError, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Account, Compfile, Sygenacs, Sygenopc, Sygenusr, Syprdfil } from '../models/systemadmin.model';

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

  obtenerUsuarios(): Observable<Sygenusr[]> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('systemAdmin','getUsers');
    return this.http.get<Sygenusr[]>(apiURL, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }

  obtenerCompanias(): Observable<Sygenacs[]> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('systemAdmin','getUsersCompanies');
    return this.http.get<Sygenacs[]>(apiURL, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }
  obtenerUsuarioCompanias(userId:string): Observable<Sygenacs[]> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('systemAdmin','getUsersUserCompanies');
    apiURL=apiURL.replace('{userId}',userId);
    return this.http.get<Sygenacs[]>(apiURL, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }
  /**
   * Lista todos los accesos disponibles en el sistema (para asignación de permisos en el administrador)
   * @returns 
   */
  obtenerAccesos(): Observable<Sygenopc[]> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('systemAdmin','getAccesos');
    return this.http.get<Sygenopc[]>(apiURL, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }
  obtenerUsuarioAccesos(userId:string): Observable<Sygenacs[]> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('systemAdmin','getUsersConfig');
    apiURL=apiURL.replace('{userId}',userId);
    return this.http.get<Sygenacs[]>(apiURL, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }
  grabarUsuarioAccesos(userId:string,accesos:Sygenacs): Observable<Sygenacs> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('systemAdmin','getUsersConfig');
    apiURL=apiURL.replace('{userId}',userId);
    return this.http.post<Sygenacs>(apiURL,accesos, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }
}
