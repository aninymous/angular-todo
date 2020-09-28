import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../todo.service';
import { of, Observable } from 'rxjs';
import { Todo } from './todo-list.model';


describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let service: TodoService;
  let spy: any;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = new TodoService();
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    service = null;
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTodo Service on init', () => {
    // given
    const mockTodos = [{ id: '1', name: 'Todo 1' }];
    const mockService = new TodoService();
    const comp = new TodoListComponent(mockService);
    const mySpy = spyOn(mockService, 'getTodos').and.returnValue(of(mockTodos));

    // when
    comp.ngOnInit();

    // then
    expect(mySpy).toHaveBeenCalled();
  });
});
