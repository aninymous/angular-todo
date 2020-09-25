import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoListComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should render', () => {
    expect(app).toBeTruthy();
  });

  it(`should have title as 'Todo List'`, () => {
    expect(app.title).toEqual('Todo List');
  });

  it('should render todo-list component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-todo-list')).not.toBe(null);
  });
});
