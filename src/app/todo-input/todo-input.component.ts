import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  public todoText: string;

  constructor(private todoservice: TodoService) { 
    this.todoText ='';

  }

  ngOnInit() {
  }

  private mayBeEnter(event): void {
    if(event.which === 13) {
      this.addTodo();
    }
  }

  private addTodo(): void {
    if (this.todoText) {
      this.todoservice.addTodo(this.todoText);
      this.todoText = '';
    }
  } 

}
