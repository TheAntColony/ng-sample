import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { HomeComponent } from './home.component';
import { addItem, loadData, setSort } from 'src/app/state/actions/data.actions';
import { DataState } from 'src/app/state/reducers/data.reducer';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;
  const initialState: DataState = {
    data: [],
    sort: { key: 'id', direction: 'asc' },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default sort settings', () => {
    expect(component.currentSort.key).toEqual('id');
    expect(component.currentSort.direction).toEqual('asc');
  });

  it('should dispatch loadData action on ngOnInit', () => {
    const dispatchSpy = spyOn(store, 'dispatch');

    component.ngOnInit();

    expect(dispatchSpy).toHaveBeenCalledWith(loadData());
  });

  it('should update sorting settings and dispatch sorting action', () => {
    const dispatchSpy = spyOn(store, 'dispatch');

    component.sortData('name');

    expect(component.currentSort.key).toEqual('name');
    expect(component.currentSort.direction).toEqual('asc');
    expect(dispatchSpy).toHaveBeenCalledWith(
      setSort({ sortKey: 'name', sortOrder: 'asc' })
    );
  });

  it('should change direction from asc to desc for existing sort key', () => {
    const dispatchSpy = spyOn(store, 'dispatch');

    component.currentSort.key = 'id';
    component.currentSort.direction = 'asc';

    component.sortData('id');

    expect(component.currentSort.key).toEqual('id');
    expect(component.currentSort.direction).toEqual('desc');
    expect(dispatchSpy).toHaveBeenCalledWith(
      setSort({ sortKey: 'id', sortOrder: 'desc' })
    );
  });

  it('should change direction from desc to asc for existing sort key', () => {
    const dispatchSpy = spyOn(store, 'dispatch');

    component.currentSort.key = 'id';
    component.currentSort.direction = 'desc';

    component.sortData('id');

    expect(component.currentSort.key).toEqual('id');
    expect(component.currentSort.direction).toEqual('asc');
    expect(dispatchSpy).toHaveBeenCalledWith(
      setSort({ sortKey: 'id', sortOrder: 'asc' })
    );
  });

  it('should change to new sort key and default to ascending order', () => {
    const dispatchSpy = spyOn(store, 'dispatch');

    component.currentSort.key = 'id';
    component.currentSort.direction = 'asc';

    component.sortData('name');

    expect(component.currentSort.key).toEqual('name');
    expect(component.currentSort.direction).toEqual('asc');
    expect(dispatchSpy).toHaveBeenCalledWith(
      setSort({ sortKey: 'name', sortOrder: 'asc' })
    );
  });

  it('should dispatch addItem action with correct payload when onAddItem is called', () => {
    const dispatchSpy = spyOn(store, 'dispatch');

    const expectedItem = {
      id: 6,
      name: 'Bob Brown',
      salary: 900,
    };

    component.onAddItem();

    expect(dispatchSpy).toHaveBeenCalledWith(
      addItem(expectedItem)
    );
  });

});
