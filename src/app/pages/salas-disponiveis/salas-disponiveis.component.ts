import { SalasService } from './salas.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-salas-disponiveis',
  templateUrl: './salas-disponiveis.component.html',
  styleUrls: ['./salas-disponiveis.component.css']
})
export class SalasDisponiveisComponent implements OnInit {

  salas!: any[];
  
  constructor(

    private salasService:SalasService
  ) { }

  ngOnInit(): void {
    
  this.salas = this.salasService.getSalas()
  
  }


}
