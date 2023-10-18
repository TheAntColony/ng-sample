import { createReducer, on } from '@ngrx/store';
import {
  loadData,
  dataLoaded,
  setSort,
} from '../actions/data.actions';

export interface DataState {
  data: any[];
  sort: { key: string; direction: string };
}

export const initialState: DataState = {
  data: [],
  sort: { key: 'id', direction: 'asc' },
};

const _dataReducer = createReducer(
  initialState,
  on(loadData, (state) => state),
  on(dataLoaded, (state, { data }) => ({ ...state, data })),
  on(setSort, (state, { sortKey, sortOrder }) => ({
    ...state,
    sort: { key: sortKey, direction: sortOrder },
  }))
);

export function dataReducer(state: any, action: any) {
  return _dataReducer(state, action);
}
