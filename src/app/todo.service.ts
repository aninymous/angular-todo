import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo-list/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: '0',
        name: 'Pay Phone Bill'
      },
      {
        id: '1',
        name: 'Call Plumber'
      }
    ];
  }

  addTodo({ name }): Observable<Todo> {
    this.todos = this.todos.concat({
      id: `${this.todos.length}`,
      name
    });
    return of(this.todos[this.todos.length - 1]);
  }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }
}
