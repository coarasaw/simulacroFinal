import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { PeliculaService } from '../servicios/pelicula.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculaDetalle?:Pelicula;
  peliculas?:Pelicula[]=[];
  suscriptionList: Subscription = new Subscription();
  public elent:boolean = false;

  constructor(private _peliculaService:PeliculaService) { }

  ngOnInit(): void {
    this.getPeliculas();
  }

  getPeliculas(){
    this.suscriptionList == this._peliculaService.getListadoPeliculas().subscribe(data =>{
      console.log(data);
      this.peliculas = [];
      //this.loading = false;
      data.forEach((element:any) => {
        this.peliculas.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        console.log(element.payload.doc.id);
        console.log(element.payload.doc.data());
      });
      console.log(this.peliculas);
    })
  }

  mostrarDetallePelicula(peliculaRecibida:Pelicula){
    this.peliculaDetalle= peliculaRecibida;
    this.elent = true;
  }

  peliculaAVer(ver:boolean){
    this.elent = ver;
  }

  peliculaABorrar(pelicula:Pelicula){   
    
    const result = this.peliculas.filter((obj) => {
      return obj.nombre != pelicula.nombre;
    })
    
    this.peliculas = result;
    this.elent = false;
    
    //verifico los datos por consola
    /* console.log(pelicula);
    console.log("lo borra");
    console.log(this.peliculas);
    console.log('Resultado ',result); */
   
  }

  peliculaAModificar(pelicula:Pelicula){
   this._peliculaService.peliculas.forEach(element => {
      if (element.id === pelicula.id) {
          element.nombre === pelicula.nombre;
          element.cantidadDePublico === pelicula.cantidadDePublico;
          element.fechaDeEstreno === pelicula.fechaDeEstreno;
      }
    });
    this.elent = false;
  }

  ngOnDestroy(): void {
    //this.suscriptionUser.unsubscribe();
      this.suscriptionList.unsubscribe();
   }
}
