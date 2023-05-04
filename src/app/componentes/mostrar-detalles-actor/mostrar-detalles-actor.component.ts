import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-mostrar-detalles-actor',
  templateUrl: './mostrar-detalles-actor.component.html',
  styleUrls: ['./mostrar-detalles-actor.component.css']
})
export class MostrarDetallesActorComponent implements OnInit {

  @Input() actorDetalle: Actor;
  @Output() clickADetalle:EventEmitter<boolean>= new EventEmitter(); 
  
  constructor() { }

  ngOnInit(): void {
  }

  Volver(peliculaDetalle:boolean){
    this.clickADetalle.emit(peliculaDetalle);
  }
}
