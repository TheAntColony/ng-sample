import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataService } from '../../core/data.service';
import * as dataActions from '../actions/data.actions';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dataActions.loadData),
      mergeMap(() =>
        this.dataService.fetchData().pipe(
          map((data) => dataActions.dataLoaded({ data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
