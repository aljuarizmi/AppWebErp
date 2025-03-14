import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;
  constructor(private http: HttpClient) {
    //this.loadConfig();
  }
  loadConfig(): Observable<any> {
    return this.http.get('/assets/config/endpoints.json');
  }
  getEndpoint(module: string, key: string): string {
    //console.log("this.config.apiTest: "+this.config.apiTest);
    //console.log("this.config.apiUrl: "+this.config.apiUrl);
    return this.config?.modules[module]?.[key] ? `${this.config.apiUrl}${this.config.modules[module][key]}` : '';
    //return this.config?.modules[module]?.[key] ? `${this.config.apiTest}${this.config.modules[module][key]}` : '';
  }
  setConfig(config: any) {
    this.config = config;
  }
}
