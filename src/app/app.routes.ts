import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthGuard } from './auth/auth.guard';
import { M00S01N01Component } from './components/modules/SY/M00S01N01.component';
import { ErrorComponent } from './components/error/error.component';
import { M00S01N02Component } from './components/modules/SY/M00S01N02.component';
import { M00S01N80Component } from './components/modules/SY/M00S01N80.component';
import { M00S01N05Component } from './components/modules/SY/M00S01N05.component';
import { M03S03N01Component } from './components/modules/CM/M03S03N01.component';

export const routes: Routes = [
    /*{ path: '', redirectTo: 'login', pathMatch: 'full' },*/
    {path:'',component:LoginComponent},
    {path: 'login', component: LoginComponent },
    {   path: 'principal', 
        component: PrincipalComponent,
        canActivate:[AuthGuard],
        children:[
            {   path:'M00S01N01',
                component:M00S01N01Component,
                canActivate:[AuthGuard]},
            {   path:'M00S01N02',
                component:M00S01N02Component,
                canActivate:[AuthGuard]},
            {   path:'M00S01N80',
                component:M00S01N80Component,
                canActivate:[AuthGuard]},
            {   path:'M00S01N05',
                component:M00S01N05Component,
                canActivate:[AuthGuard]},
            {   path:'M03S03N01',
                component:M03S03N01Component,
                canActivate:[AuthGuard]
            }
    ]
    },
    //{ path: '**', redirectTo: 'login' }
    {   path:'**',component:ErrorComponent }
  ];