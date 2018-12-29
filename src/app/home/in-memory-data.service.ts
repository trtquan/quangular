import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Teacher } from './techer-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const teacheres = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {teacheres};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the teacheres array is empty,
  // the method below returns the initial number (11).
  // if the teacheres array is not empty, the method below returns the highest
  // techer id + 1.
  genId(teacheres: Teacher[]): number {
    return teacheres.length > 0 ? Math.max(...teacheres.map(hero => hero.id)) + 1 : 11;
  }
}
