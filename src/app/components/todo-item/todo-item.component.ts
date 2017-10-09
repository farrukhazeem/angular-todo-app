import { Todo } from './../../classes/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  private todo: Todo;

todos = []
  constructor(private todoService: TodoService) { 
   this.todos = todoService.getTodo()
   console.log(this.todos);
  }

  ngOnInit() {
  }
private removeTodo(): void {
  this.todoService.removeTodo(this.todo.id);
  
}

}
