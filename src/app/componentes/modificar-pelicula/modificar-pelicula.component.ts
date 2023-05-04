import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {

  @Input() peliculaDetalle:any | Pelicula;
  @Output() onPeliculaAModifica:EventEmitter<Pelicula>= new EventEmitter();
  nuevaPelicula = Pelicula;
  

  constructor() { }

  ngOnInit(): void {
  }

  modificarPelicula(peliculaModificada:Pelicula){
    this.onPeliculaAModifica.emit(peliculaModificada);
  }

}