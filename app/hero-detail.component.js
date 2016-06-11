System.register(['angular2/core', './hero'], function(exports_1, context_1) {
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
    var core_1, hero_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', hero_1.Hero)
                ], HeroDetailComponent.prototype, "hero", void 0);
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        template: "\n      <div *ngIf=\"hero\">\n        <h2>{{hero.name}} details!</h2>\n        <div><label>id: </label>{{hero.id}}</div>\n        <div>\n          <label>name: </label>\n          <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n        </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            }());
            exports_1("HeroDetailComponent", HeroDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFBQTtnQkFHQSxDQUFDO2dCQUZDO29CQUFDLFlBQUssRUFBRTs7aUVBQUE7Z0JBZlY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsaVJBU1A7cUJBQ0osQ0FBQzs7dUNBQUE7Z0JBS0YsMEJBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTtZQUhELHFEQUdDLENBQUEiLCJmaWxlIjoiaGVyby1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SGVyb30gZnJvbSAnLi9oZXJvJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktaGVyby1kZXRhaWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiAqbmdJZj1cImhlcm9cIj5cbiAgICAgICAgPGgyPnt7aGVyby5uYW1lfX0gZGV0YWlscyE8L2gyPlxuICAgICAgICA8ZGl2PjxsYWJlbD5pZDogPC9sYWJlbD57e2hlcm8uaWR9fTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5uYW1lOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImhlcm8ubmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgSGVyb0RldGFpbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGhlcm86IEhlcm87XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
