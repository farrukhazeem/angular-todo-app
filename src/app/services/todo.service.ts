import { Todo } from './../classes/todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

 private todos: Todo[];
 private nextId: number;

  constructor() { 
    this.todos = [
      new Todo(0, "Study in Evening"),
      new Todo(1, "Make Angular App"),
      new Todo(2, "Play Cricket"),
    ];

    this.nextId =3;
  }
   public addTodo(text: string): void {
     let todo = new Todo(this.nextId, text);
     this.todos.push(todo);
     this.nextId++;

   }
   public getTodos(): Todo[] {
     return this.todos;

   }
   public removeTodo(id: number): void {
     this.todos = this.todos.filter((todo)=> todo.id !=id);
   }
}
