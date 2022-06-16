import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  constructor() { }


  getSalas(){
    return[
      {
      id: 1 ,
      img:".../../../assets/img/sala_um.png", 
      nome:"Sala Roxa",
      movel:"Sofá", 
      perfil:"Psicologo",
      local: "Av.Paulista", 
      preco: "60",
      horarios:[
        {
          diaDisponivel:"02",
          mesDisponivel:"Abril",
          semanaDisponivel:"sexta-feira",
          horadisponivelManha:"10:00 as 11:00", 
          horadisponivelTarde:"14:00 as 15:00", 
        },
        {
          diaDisponivel:"05",
          mesDisponivel:"Abril",
          semanaDisponivel:"segunda-feira",
          horadisponivelManha:"14:00 as 15:00", 
          horadisponivelTarde:"19:00 as 20:00", 
        }
        
     
      ]
       
 
    },
    {
      id: 2 ,
      img:".../../../assets/img/sala_dois.png", 
      nome:"Sala Verde", 
      movel:"Poltrona", 
      perfil:"Dentista", 
      local: "Republica do Libano", 
      preco: "90",
      horarios:[
        {
          diaDisponivel:"02",
          mesDisponivel:"Abril",
          semanaDisponivel:"sexta-feira",
          horadisponivelManha:"10:00 as 11:00", 
          horadisponivelTarde:"14:00 as 15:00", 
        },
        {
          diaDisponivel:"05",
          mesDisponivel:"Abril",
          semanaDisponivel:"segunda-feira",
          horadisponivelManha:"14:00 as 15:00", 
          horadisponivelTarde:"19:00 as 20:00", 
        }
        
     
      ]
    }
    ]
  }

  getSala(id:number){
    let salas = this.getSalas();
    for(let i = 0; i < salas.length; i++){
      let sala = salas[i];
      if(sala.id = id){
        return sala;
      }
    }
    return null
  
  }

}
