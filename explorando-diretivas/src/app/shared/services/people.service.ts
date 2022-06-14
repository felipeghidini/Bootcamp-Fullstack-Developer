import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        nome: 'Felipe',
        sobrenome: 'Ghidini',
        idade: 33
      },
      {
        nome: 'Amanda',
        sobrenome: 'Ghidini',
        idade: 31
      },
      {
        nome: 'Eloah',
        sobrenome: 'Ghidini',
        idade: 0
      },
      {
        nome: 'Rafael',
        sobrenome: 'Ghidini',
        idade: 4
      },
    ]

    return of(peopleArray);
  }
}
