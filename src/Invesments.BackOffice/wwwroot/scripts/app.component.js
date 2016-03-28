"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var sample_components_1 = require('./sample.components');
var dynamic_component_1 = require('./dynamic.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n         \n         <nav class=\"btn-group\" role=\"group\" aria-label=\"...\"> \n             <a href=\"\" [routerLink]=\"['Sample']\" class=\"btn btn-default\">Trade Feeds</a> \n             <a href=\"\" [routerLink]=\"['AnotherSample']\" class=\"btn btn-default\">Security Master</a>\n             <a href=\"\" [routerLink]=\"['DynamicRoute']\" class=\"btn btn-default\">Dynamic Route</a> \n         </nav> \n          \n         <router-outlet></router-outlet> \n     ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/sample', name: 'Sample', component: sample_components_1.SampleComponent, useAsDefault: true },
            { path: '/another-sample', name: 'AnotherSample', component: sample_components_1.AnotherSampleComponent },
            { path: '/dynamic-route', name: 'DynamicRoute', component: dynamic_component_1.DynamicComponent },
            { path: '/**', redirectTo: ['Sample'] }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map