import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
