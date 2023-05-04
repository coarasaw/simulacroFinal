import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-gral',
  templateUrl: './menu-gral.component.html',
  styleUrls: ['./menu-gral.component.css']
})
export class MenuGralComponent implements OnInit {

  constructor(private rutas: Router) { }

  ngOnInit(): void {
  }

  inicio(){
    this.rutas.navigate(['inicio']);
  }

  busqueda(){
    this.rutas.navigate(['busqueda']);
  }

  // Peliculas
  altaPelicula(){
    this.rutas.navigate(['peliculas/altaPeliculas']);
  }
  listadoPelicula(){
    this.rutas.navigate(['peliculas/listadoPeliculas']);
  }

  // Actores
  actor(){
    this.rutas.navigate(['actores/altActor']);
  }
  listadoActor(){
    this.rutas.navigate(['actores/listadoActores']);
  }
  peliculaActor(){
    this.rutas.navigate(['actores/peliculaActor']);
  }

}
