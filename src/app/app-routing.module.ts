import { HorarioDisponivelComponent } from './pages/horario-disponivel/horario-disponivel.component';
import { LoginComponent } from './pages/login/login.component';


import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SalasDisponiveisComponent } from './pages/salas-disponiveis/salas-disponiveis.component';


const APP_ROUTES : Routes = [
  { path: 'salas-disponiveis', component : SalasDisponiveisComponent},
  { path: 'horarios-disponiveis/:id', component : HorarioDisponivelComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: AppComponent}
];

export const routing: ModuleWithProviders<any>= RouterModule.forRoot(APP_ROUTES);