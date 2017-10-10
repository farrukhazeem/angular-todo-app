import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './classes/todo';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (public todoService: TodoService){
    
  }
  
}
