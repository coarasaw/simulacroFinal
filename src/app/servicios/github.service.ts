import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Github } from './../clases/github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<Github>{
  const url = 'https://api.github.com/users/coarasaw';
    return this.http.get<Github>(url);
  }  
}
