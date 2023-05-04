import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActorService } from 'src/app/servicios/actor.service';
import { Actor } from '../../clases/actor';

@Component({
  selector: 'app-listado-actores',
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.css']
})
export class ListadoActoresComponent implements OnInit {
  //suscriptionUser: Subscription = new Subscription();
  suscriptionList: Subscription = new Subscription();
  listActores: Actor[] = [];
  loading = false;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private _actorService: ActorService) { }

  ngOnInit(): void {
    this.loading = true;
    //this.suscriptionUser = this.afAuth.user.subscribe(user => {
      //console.log(user);
      this.getActores();

      //Esto es para que este Logeado
      /* if (user && user.emailVerified) {
        // cargar listado
      } else {
        this.router.navigate(['/auth/login'])
      } */
    //})
  }

  getActores(){
    this.suscriptionList == this._actorService.getListadoActores().subscribe(data =>{
      //console.log(data);
      this.listActores = [];
      this.loading = false;
      data.forEach((element:any) => {
        this.listActores.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
      });
      //console.log(this.listJuegos);
    })
  }

  ngOnDestroy(): void {
   //this.suscriptionUser.unsubscribe();
     this.suscriptionList.unsubscribe();
  }

}