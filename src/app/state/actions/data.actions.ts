import { createAction, props } from '@ngrx/store';

export const loadData = createAction('[Home] Load Data');
export const dataLoaded = createAction(
  '[Home] Data Loaded',
  props<{ data: any }>()
);

export const setSort = createAction(
  '[Home] Set Sort',
  props<{ sortKey: string; sortOrder: string }>()
);

export const addItem = createAction(
  '[Home] Add Item',
  props<{ id: number, name: string, salary: number }>()
);