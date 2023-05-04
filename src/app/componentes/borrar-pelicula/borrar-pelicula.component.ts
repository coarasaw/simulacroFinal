import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-borrar-pelicula',
  templateUrl: './borrar-pelicula.component.html',
  styleUrls: ['./borrar-pelicula.component.css']
})
export class BorrarPeliculaComponent implements OnInit {

  @Input() peliculaDetalle: Pelicula;
  @Output() onPeliculaABorrar:EventEmitter<Pelicula>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  borrarPelicula(pelicula:Pelicula){
    this.onPeliculaABorrar.emit(pelicula);
  }
}