import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;
  constructor(private http: HttpClient) {}
  loadConfig(): Observable<any> {
    return this.http.get('/assets/config/endpoints.json');
  }
  getEndpoint(module: string, key: string): string {
    return this.config?.modules[module]?.[key] ? `${this.config.baseUrl}${this.config.modules[module][key]}` : '';
  }
  setConfig(config: any) {
    this.config = config;
  }
}
