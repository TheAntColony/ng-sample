import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as DataActions from '../../state/actions/data.actions';
import { selectSortedData } from '../../state/selectors/data.selectors';
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

  sortData(key: string): void {
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

  onAddItem(): void {
    const newItem = {
      id: 6,
      name: 'Bob Brown',
      salary: 900,
    };
    this.store.dispatch(DataActions.addItem(newItem));
  }
}
