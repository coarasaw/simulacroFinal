import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AltaPeliculasComponent } from './alta-peliculas/alta-peliculas.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { TablaActorComponent } from '../componentes/tabla-actor/tabla-actor.component';


@NgModule({
  declarations: [
    AltaPeliculasComponent,
    ListadoPeliculasComponent,
    TablaActorComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PeliculasModule { }
