import { AuthService } from './pages/login/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SelecaoDataComponent } from './components/selecao-data/selecao-data.component';
import { LoginComponent } from './pages/login/login.component';
import { SalasDisponiveisComponent } from './pages/salas-disponiveis/salas-disponiveis.component';
import { routing } from './app-routing.module';
import { HorarioDisponivelComponent } from './pages/horario-disponivel/horario-disponivel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelecaoDataComponent,
    LoginComponent,
    SalasDisponiveisComponent,
    HorarioDisponivelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
