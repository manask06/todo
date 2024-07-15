import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
interface Todo {
  id?: number;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  createTodo(description: string): void {
    const newTodo: Todo = { id: 0, description, completed: false };
    this.todoService.createTodo(newTodo).subscribe(todo => this.todos.push(todo));
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo).subscribe();
  }

  deleteTodo(id?: number): void {
    if (!id) {
      return
    }
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }
}
