System.register(['angular2/core', './hero.service', './hero-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_service_1, hero_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Tour of Heroes';
                    this.heroes = [];
                }
                AppComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                AppComponent.prototype.getHeroes = function () {
                    this.heroes = this._heroService.getHeroes();
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [hero_detail_component_1.HeroDetailComponent],
                        providers: [hero_service_1.HeroService],
                        template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"#hero of heroes\"\n          (click)=\"onSelect(hero)\"\n          [class.selected]=\"hero === selectedHero\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    "
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQ0Usc0JBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFFN0MsVUFBSyxHQUFHLGdCQUFnQixDQUFDO29CQUV6QixXQUFNLEdBQVcsRUFBRSxDQUFDO2dCQUo2QixDQUFDO2dCQU1sRCwrQkFBUSxHQUFSLFVBQVMsSUFBVTtvQkFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsZ0NBQVMsR0FBVDtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzlDLENBQUM7Z0JBRUQsK0JBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7Z0JBQ2xCLENBQUM7Z0JBbENIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFVBQVUsRUFBRSxDQUFDLDJDQUFtQixDQUFDO3dCQUNqQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3dCQUN4QixRQUFRLEVBQUUsNldBV1A7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBbUJGLG1CQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCx1Q0FrQkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSBmcm9tICcuL2hlcm8uc2VydmljZSc7XG5pbXBvcnQgeyBIZXJvRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9oZXJvLWRldGFpbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICBkaXJlY3RpdmVzOiBbSGVyb0RldGFpbENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0hlcm9TZXJ2aWNlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDE+e3t0aXRsZX19PC9oMT5cbiAgICA8aDI+TXkgSGVyb2VzPC9oMj5cbiAgICA8dWwgY2xhc3M9XCJoZXJvZXNcIj5cbiAgICAgIDxsaSAqbmdGb3I9XCIjaGVybyBvZiBoZXJvZXNcIlxuICAgICAgICAgIChjbGljayk9XCJvblNlbGVjdChoZXJvKVwiXG4gICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cImhlcm8gPT09IHNlbGVjdGVkSGVyb1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCI+e3toZXJvLmlkfX08L3NwYW4+IHt7aGVyby5uYW1lfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgICA8bXktaGVyby1kZXRhaWwgW2hlcm9dPVwic2VsZWN0ZWRIZXJvXCI+PC9teS1oZXJvLWRldGFpbD5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2hlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSkgeyB9XG5cbiAgdGl0bGUgPSAnVG91ciBvZiBIZXJvZXMnO1xuICBzZWxlY3RlZEhlcm86IEhlcm87XG4gIGhlcm9lczogSGVyb1tdID0gW107XG5cbiAgb25TZWxlY3QoaGVybzogSGVybykge1xuICAgIHRoaXMuc2VsZWN0ZWRIZXJvID0gaGVybztcbiAgfVxuXG4gIGdldEhlcm9lcygpIHtcbiAgICB0aGlzLmhlcm9lcyA9IHRoaXMuX2hlcm9TZXJ2aWNlLmdldEhlcm9lcygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXRIZXJvZXMoKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
