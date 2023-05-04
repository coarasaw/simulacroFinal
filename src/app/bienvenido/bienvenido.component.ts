import { Component, OnInit } from '@angular/core';
import { Github } from '../clases/github';
import { GithubService } from '../servicios/github.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  user: Github=null;
  
  constructor(private _githubService:GithubService) { }

  ngOnInit(): void {
    this._githubService.getUser().subscribe(user => this.user = user); 
  }

  
}

