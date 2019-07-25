import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from '../list/list.component';

const routes:Routes=[
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'list'
  },
  {
    path:'list',
    component:ListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class TodolistroutingModule { }
