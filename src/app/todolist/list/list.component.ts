import { Component, OnInit } from '@angular/core';
import {TodoModel} from './models/todo.model';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list:TodoModel[] =[];

  constructor(private  service:TodoService) { }

  ngOnInit() {
    this.service.getTodos().subscribe((todolist:TodoModel[])=>{
      console.log(todolist);
      this.list =  [...todolist];
    },(error)=>{
      console.log(error)
    })
  }

}
