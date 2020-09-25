import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo-list/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getTodos(): Observable<Todo[]> {
    const todos = [
      {
        name: 'Pay Phone Bill'
      },
      {
        name: 'Call Plumber'
      }
    ];
    return of(todos);
  }

  constructor() { }
}
