import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ConfigService } from './config.service';
import { ErrorHandlerService } from './error-handler.service';
import { catchError, Observable } from 'rxjs';
import { Cmcurrat } from '../models/currencies.model';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private errorHandler: ErrorHandlerService,private configService: ConfigService,private authService: AuthService,private http: HttpClient) { }

  obtenerTiposCambioPeriodo(periodo:string,pageSize:number,pageIndex:number,orderColumn:string): Observable<Cmcurrat[]> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('currencies','getExchangeRates');
    apiURL=apiURL.replace('{periodo}',periodo);
    return this.http.get<Cmcurrat[]>(apiURL, { headers: { Authorization: `Bearer ${token}` },params:{pageSize:pageSize,pageIndex:pageIndex,orderColumn:orderColumn} })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }
  obtenerTipoCambioSunat(fecha:string): Observable<Cmcurrat> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('currencies','getExchangeRateSunat');
    return this.http.get<Cmcurrat>(apiURL, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError) // Manejo de errores mejorado
    );
  }
  insertarTipoCambio(body:Cmcurrat): Observable<Cmcurrat> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('currencies','insertExchangeRate');
    return this.http.get<Cmcurrat>(apiURL, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError)
    );
  }
  actualizarTipoCambio(body:Cmcurrat): Observable<Cmcurrat> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('currencies','updateExchangeRate');
    return this.http.get<Cmcurrat>(apiURL, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError)
    );
  }
  eliminarTipoCambio(body:Cmcurrat): Observable<Cmcurrat> {
    const token = this.authService.getToken();
    let apiURL:string=this.configService.getEndpoint('currencies','updateExchangeRate');
    return this.http.get<Cmcurrat>(apiURL, { headers: { Authorization: `Bearer ${token}` } })
    .pipe(
      catchError(this.errorHandler.handleError)
    );
  }
}
