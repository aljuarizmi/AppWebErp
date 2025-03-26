import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AppWebErp';
  constructor(private configService: ConfigService) {
  }
  ngOnInit() {
    this.configService.loadConfig().subscribe(config => {
      this.configService.setConfig(config);
      //console.log('config: '+config.apiUrl);
    });
  }
}
