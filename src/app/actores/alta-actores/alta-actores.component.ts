import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pais } from 'src/app/clases/pais';
import { ActorService } from 'src/app/servicios/actor.service';
import { ErrorService } from 'src/app/servicios/error.service';
import { PaisService } from 'src/app/servicios/pais.service';
import { Actor } from '../../clases/actor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.css']
})
export class AltaActoresComponent implements OnInit {
  //prop para manejo de la lista de paises
  actor:any|Actor;
  paisSeleccionado:any|Pais;
  paises:any|Pais = [];
  //Formulario Validar
  registrarForm: FormGroup;
  loading = false;
  public pais:string="Elegir Pais";
  //paisService: any;

  constructor( public _unActor: ActorService,
               private fb: FormBuilder,
               private rutas: Router,
               private _errorService: ErrorService,
               private _paisesService: PaisService,
               private toastr: ToastrService
               ) { 

                this.registrarForm = this.fb.group({
                  nombre: ['',[Validators.required, Validators.minLength(4)]],
                  apellido: ['',[Validators.required, Validators.minLength(4)]],
                  email: ['',[Validators.required, Validators.email]],
                  direccion: ['',[Validators.required, Validators.minLength(4)]],
                })
  }

  ngOnInit(): void {
    this._paisesService.getPaises().subscribe(
      data=>{
        this.paisSeleccionado=data;
      }
    )
  }

  mostrarPais(paisNombre:string){
    this.pais=paisNombre;
  }

  registar(){
    console.log('Registar');
    this.loading = true;
    const datoGrabar: Actor = {
      nombre: this.registrarForm.get('nombre')?.value,
      apellido: this.registrarForm.get('apellido')?.value,
      email: this.registrarForm.get('email')?.value,
      direccion: this.registrarForm.get('direccion')?.value,
      pais:this.pais
    }
    this._unActor.crearActor(datoGrabar).then(resp => {
      this.showSuccess();
    }).catch((error) => {
      this.showError(error);
    });
    this.rutas.navigate(['actores/listadoActores']);
  }

  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }
}

