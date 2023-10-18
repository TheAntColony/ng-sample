import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as DataActions from '../../actions/data.actions';
import {
  selectSortedData,
} from '../../selectors/data.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sortedData$: Observable<any>;

  currentSort: { key: string; direction: 'asc' | 'desc' } = {
    key: 'id',
    direction: 'asc',
  };

  constructor(private store: Store<AppState>) {
    this.sortedData$ = this.store.select(selectSortedData);
  }

  ngOnInit(): void {
    this.store.dispatch(DataActions.loadData());
  }

  sortData(key: string) {
    if (this.currentSort.key === key) {
      this.currentSort.direction =
        this.currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSort.key = key;
      this.currentSort.direction = 'asc';
    }

    this.store.dispatch(
      DataActions.setSort({
        sortKey: key,
        sortOrder: this.currentSort.direction,
      })
    );
  }
}