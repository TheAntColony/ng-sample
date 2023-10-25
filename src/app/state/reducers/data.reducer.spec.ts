import { DataState, dataReducer } from './data.reducer';
import {
  addItem,
  dataLoaded,
  loadData,
  setSort,
} from '../actions/data.actions';

describe('DataReducer', () => {
  it('should return the initial state when the "loadData" action is dispatched', () => {
    const initialState: DataState = {
      data: [],
      sort: { key: 'id', direction: 'asc' },
    };
    const action = loadData();
    const newState = dataReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it('should update the state with the new data when the "dataLoaded" action is dispatched', () => {
    const initialState: DataState = {
      data: [],
      sort: { key: 'id', direction: 'asc' },
    };
    const newData = [{ id: 1, name: 'John Doe' }];
    const action = dataLoaded({ data: newData });
    const newState = dataReducer(initialState, action);
    expect(newState.data).toEqual(newData);
  });

  it('should update the state with the new sort key and sort order when the "setSort" action is dispatched', () => {
    const initialState: DataState = {
      data: [],
      sort: { key: 'id', direction: 'asc' },
    };
    const sortKey = 'name';
    const sortOrder = 'desc';
    const action = setSort({ sortKey, sortOrder });
    const newState = dataReducer(initialState, action);
    expect(newState.sort).toEqual({ key: sortKey, direction: sortOrder });
  });

  it('should handle the case where the "addItem" action is dispatched', () => {
    const initialState: DataState = {
      data: [],
      sort: { key: 'id', direction: 'asc' },
    };
    const newItem = { id: 6, name: 'Bob Brown', salary: 900 };
    const action = addItem(newItem);
    const newState = dataReducer(initialState, action);
    console.log(newState)
    expect(newState.data.length).toEqual(1);
  });

  it('should handle the case where the "dataLoaded" action is dispatched with no data', () => {
    const initialState: DataState = {
      data: [],
      sort: { key: 'id', direction: 'asc' },
    };
    const action = dataLoaded({ data: [] });
    const newState = dataReducer(initialState, action);
    expect(newState.data).toEqual([]);
  });

});
