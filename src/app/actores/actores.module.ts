import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActoresRoutingModule } from './actores-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Propios
import { SharedModule } from '../shared/shared.module';

//Propios
import { AltaActoresComponent } from './alta-actores/alta-actores.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { PeliculaActorComponent } from './pelicula-actor/pelicula-actor.component';
import { TablaPaisComponent } from '../componentes/tabla-pais/tabla-pais.component';
import { TablaActorPeliculaComponent } from '../componentes/tabla-actor-pelicula/tabla-actor-pelicula.component';
import { MostrarPeliculaActorComponent } from '../componentes/mostrar-pelicula-actor/mostrar-pelicula-actor.component';
import { MostrarPaisActorComponent } from '../componentes/mostrar-pais-actor/mostrar-pais-actor.component';
import { MostrarDetallesActorComponent } from '../componentes/mostrar-detalles-actor/mostrar-detalles-actor.component';

@NgModule({
  declarations: [
    AltaActoresComponent,
    ListadoActoresComponent,
    PeliculaActorComponent,
    TablaPaisComponent,
    TablaActorPeliculaComponent,
    MostrarPeliculaActorComponent,
    MostrarPaisActorComponent,
    MostrarDetallesActorComponent
  ],
  imports: [
    CommonModule,
    ActoresRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ActoresModule { }
