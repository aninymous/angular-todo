import { Component, OnInit } from '@angular/core';
import { Todo } from './todo-lisy.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todoList: Todo[] = [
    {
      name: 'Pay Phone Bill'
    },
    {
      name: 'Call Plumber'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
