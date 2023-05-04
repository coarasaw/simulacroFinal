import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { ActorService } from 'src/app/servicios/actor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pelicula-actor',
  templateUrl: './pelicula-actor.component.html',
  styleUrls: ['./pelicula-actor.component.css']
})
export class PeliculaActorComponent implements OnInit {
  actorNombre: string;
  actorDetalle?:Actor;
  actores?:Actor[]=[];
  suscriptionList: Subscription = new Subscription();
  elent:boolean = false;
  actualDetalleActor?:Actor;

  constructor(private _actorService:ActorService) { }

  ngOnInit(): void {
    this.getActores();
  }

  mostrarDetalleActor(actorRecibida:Actor){
    this.actualDetalleActor= actorRecibida;
    this.elent = true;
  }

  verDato(ver:boolean){
    this.elent = ver;
  }
  
  getActores(){
    this.suscriptionList == this._actorService.getListadoActores().subscribe(data =>{
      this.actores = [];
      data.forEach((element:any) => {
        this.actores.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        console.log(element.payload.doc.id);
        console.log(element.payload.doc.data());
      });
      console.log(this.actores);
    })
  }

  ngOnDestroy(): void {
      this.suscriptionList.unsubscribe();
   }
}

