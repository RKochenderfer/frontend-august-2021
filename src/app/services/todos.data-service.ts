import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TodoItemModel } from "../models/todo.models";
import { environment } from '../../environments/environment';
import { map, tap } from "rxjs/operators";
@Injectable()
export class TodosDataService {

  private items: TodoItemModel[] = [];

  readonly baseUrl = environment.apiUrl + '/todos';

  private subject = new BehaviorSubject<TodoItemModel[]>(this.items);

  constructor(private client: HttpClient) {
    console.log('About to get the data')
    client.get<{ data: TodoItemModel[] }>(this.baseUrl)
      .pipe(
        map(response => response.data), // { data: TodoItem[]} => TodoItem[]
        tap(items => this.items = items),
        tap(() => this.subject.next(this.items)),
        tap(() => console.log('Got the data!'))
      ).subscribe();

  }

  getTodoItems(): Observable<TodoItemModel[]> {
    return this.subject.asObservable();
  }

  add(description: string): void {
    // call the API
    this.client.post<TodoItemModel>(this.baseUrl, { description })
      .pipe(
        tap(todoItem => {
          this.items = [todoItem, ...this.items];
          this.subject.next(this.items);
        })
      ).subscribe();
  }
}
