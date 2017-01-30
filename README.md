# Angular 2 stuff

*two way binding*
<input [(ngModel)]="hero.name" placeholder="name">
*for loop*
<li *ngFor="let hero of heroes">
*click event*
<li (click)="onSelect(hero)">
*ngIf*
<div *ngIf="selectedHero">
*equivalent of ngClass*
[class.selected]="hero === selectedHero"
*pass object to component*
<my-hero-detail [hero]="selectedHero"></my-hero-detail>

# Questions:

* Why do we need `moduleId: module.id`?
