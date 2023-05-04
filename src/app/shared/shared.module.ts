import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubComponent } from './github/github.component';
import { MenuGralComponent } from './menu-gral/menu-gral.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    GithubComponent,
    MenuGralComponent,
    SpinnerComponent
  ],exports:[
    MenuGralComponent,
    GithubComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
