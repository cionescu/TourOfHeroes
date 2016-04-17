import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
  selector: 'my-app',
  directives: [HeroDetailComponent],
  providers: [HeroService],
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes"
          (click)="onSelect(hero)"
          [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `
})
export class AppComponent implements OnInit {
  constructor(private _heroService: HeroService) { }
  title = 'Tour of Heroes';
  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeroes() {
    this.heroes = this._heroService.getHeroes();
  }
  ngOnInit() {
    this.getHeroes()''
  }
}
