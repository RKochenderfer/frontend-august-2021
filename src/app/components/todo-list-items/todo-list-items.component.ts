import { Component, Input, OnInit } from '@angular/core';
import { TodoItemModel } from 'src/app/models/todo.models';


@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.css']
})
export class TodoListItemsComponent implements OnInit {

  @Input() todoList: TodoItemModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

