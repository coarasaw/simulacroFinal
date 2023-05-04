import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { PaisService } from 'src/app/servicios/pais.service';

@Component({
  selector: 'app-mostrar-pais-actor',
  templateUrl: './mostrar-pais-actor.component.html',
  styleUrls: ['./mostrar-pais-actor.component.css']
})
export class MostrarPaisActorComponent implements OnInit {

  termino : string = '';
  hayError: boolean = false;
  paises  : Pais[] = [];
  mostrarSugerencias: boolean = false;
  //elent:boolean = true;

  @Input() actorDetalle: Actor;
  @Output() clickADetalle:EventEmitter<boolean>= new EventEmitter(); 

  constructor(private _paisService:PaisService) { }

  ngOnInit(): void {
    //this.elent = true;
    this.termino = this.actorDetalle.pais;
    this.buscar(this.termino);
  }

  buscar( termino: string ) {
    
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino  = termino;
    
    this._paisService.getPaisByName( termino )
      .subscribe( (paisesDevuelto) => {
        console.log('Ver Pais Actor ',paisesDevuelto);
        this.paises = paisesDevuelto;
        console.log('Ver Pais Actor imprimir ',this.paises);
        
      }, (err) => {
        this.hayError = true;
        this.paises   = [];
      });

  }
  
  Volver(peliculaDetalle:boolean){
    this.clickADetalle.emit(peliculaDetalle);
  }

}
