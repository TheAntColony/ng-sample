import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  fetchData(): Observable<any> {
    return of([
      { id: 1, name: 'John Doe', salary: 11000 },
      { id: 2, name: 'Jane Smith', salary: 6000 },
      { id: 3, name: 'Bob Johnson', salary: 7000 },
      { id: 4, name: 'Alice Williams', salary: 8000 },
      { id: 5, name: 'Charlie Brown', salary: 2000 },
    ]);
  }
}
