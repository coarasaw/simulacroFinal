import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PeliculaService } from 'src/app/servicios/pelicula.service';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  suscriptionList: Subscription = new Subscription();
  listPeliculas: Pelicula[] = [];
  loading = false;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private _peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getPeliculas();
  }

  getPeliculas(){
    this.suscriptionList == this._peliculaService.getListadoPeliculas().subscribe(data =>{
      console.log(data);
      this.listPeliculas = [];
      
      data.forEach((element:any) => {
        this.listPeliculas.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        this.loading = false;
        console.log(element.payload.doc.id);
        console.log(element.payload.doc.data());
      });
      console.log(this.listPeliculas);
    })
  }

  ngOnDestroy(): void {
      this.suscriptionList.unsubscribe();
   }
}

