import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { first } from 'rxjs';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThiredComponent } from './third/thired.component';

const routes: Routes = [
  {path:'ok',component:ThiredComponent,children:[{path:'[name]="data.name"',component:ThiredComponent}]},
  
  {path:'',component:FirstComponent,children:[{path:'ok',component:ThiredComponent}]},

  
 // ,children:[{path:'ok',component:ThiredComponent}]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
