import { Component, OnInit } from '@angular/core';
import { TodoItemModel } from 'src/app/models/todo.models';

@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.css']
})
export class TodoListItemsComponent implements OnInit {

  items: TodoItemModel[] = [
    { description: 'Mow Lawn' },
    { description: 'Empty boxes from Garage' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

