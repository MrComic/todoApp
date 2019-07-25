import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TodoModel} from '../list/models/todo.model';
import {tap, toArray} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos():Observable<TodoModel|TodoModel[]> {
    return this.http.get<TodoModel>("https://jsonplaceholder.typicode.com/todos/")
      .pipe(tap(_ => console.log('list loaded')));
  }
}
