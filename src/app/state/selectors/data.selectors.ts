import { createSelector } from 'reselect';
import { DataState } from '../reducers/data.reducer';
import { createFeatureSelector } from '@ngrx/store';

export const selectDataState = createFeatureSelector<DataState>('data');

export const selectAllData = createSelector(
  selectDataState,
  (state: DataState) => state.data
);

export const selectSortState = createSelector(
  selectDataState,
  (state: DataState) => {
    return state.sort;
  }
);

export const selectSortedData = createSelector(
  selectAllData,
  selectSortState,
  (data: any, sortField: any) => {
    const { key, direction } = sortField;
    return [...data].sort((a, b) => {
      if (typeof a[key] === 'number') {
        return direction === 'asc' ? a[key] - b[key] : b[key] - a[key];
      }
      return direction === 'asc'
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    });
  }
);
