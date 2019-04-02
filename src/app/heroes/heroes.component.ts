import { Hero } from '../hero';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
