import { Component, OnInit } from '@angular/core';
import { TodoItemModel } from 'src/app/models/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: TodoItemModel[] = [
    { description: 'Buy Twinkies' },
    { description: 'Clean mom\'s Car' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
