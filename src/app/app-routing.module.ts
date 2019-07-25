import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path:'',
  pathMatch: 'full',
  redirectTo:'todo'
},{
    path:'todo',
    loadChildren:() => import('./todolist/todolist.module').then(m=>m.TodolistModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
