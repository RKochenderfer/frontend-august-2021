import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";

import * as actions from '../actions/learning.actions';
import { environment } from '../../environments/environment';
import { LearningEntity } from '../reducers/learning.reducer';

@Injectable()
export class LearningEffects {

  readonly baseUrl = environment.apiUrl + '/learningitems';

  loadTheData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadLearningData), // only do this if it is a loadLearningData action. Otherwise, forget about it...
      switchMap(() => this.http.get<{ data: LearningEntity[] }>(this.baseUrl) // an observable of the response
        .pipe(
          map(response => response.data), // is that response { data: LearningEntity[]} => LearningEntity[]
          map((payload) => actions.loadLearningDataSucceeded({ payload })) // LearningEntity[] => action.loadLearingDataSucceded(data)
        )
      )
    )
  )

  fakeId = 1;
  // gives a fake id to the learning item.
  learningItemCreated = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.learningItemCreated),
      map(action => action.payload),
      map(fakeItem => {
        const tempItem: LearningEntity = {
          id: 'TEMPID' + this.fakeId++,
          ...fakeItem
        };
        return actions.temporaryLearningItemCreated({ payload: tempItem })
      })
    )
  )


  constructor(private actions$: Actions, private http: HttpClient) { }
}
