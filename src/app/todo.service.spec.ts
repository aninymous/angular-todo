import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { Todo } from './todo-list/todo-list.model';


describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTodos', () => {
    it('should return todo list with 2 items', (done: DoneFn) => {
      service.getTodos().subscribe({
        next: (todos: Todo[]) => {
          expect(todos).toBeTruthy();
          expect(todos.length).toEqual(2);
          done();
        }
      });
    });
  });
});
