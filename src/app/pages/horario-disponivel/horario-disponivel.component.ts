import { SalasService } from './../salas-disponiveis/salas.service';
import { SalasDisponiveisComponent } from './../salas-disponiveis/salas-disponiveis.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-horario-disponivel',
  templateUrl: './horario-disponivel.component.html',
  styleUrls: ['./horario-disponivel.component.css']
})
export class HorarioDisponivelComponent implements OnInit {

  id!: number;
sala:any; 
horarios:any;

  constructor(
    private salasService:SalasService,
    private route:ActivatedRoute
  ) {
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.sala = this.salasService.getSala(this.id)
    this.horarios= this.sala.horarios

  }

}
