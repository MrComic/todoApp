import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {TodolistroutingModule} from './todolistrouting/todolistrouting.module';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    TodolistroutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule ,
  ]
})
export class TodolistModule {

}
