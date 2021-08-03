import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosDataService } from 'src/app/services/todos.data-service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myPay = 150_000;

  numberOfTodos$!: Observable<number>;
  constructor(private service: TodosDataService) { }

  ngOnInit(): void {
    this.numberOfTodos$ = this.service.getTodoItems()
      .pipe(
        map(todos => todos.length)
      );
  }

}
