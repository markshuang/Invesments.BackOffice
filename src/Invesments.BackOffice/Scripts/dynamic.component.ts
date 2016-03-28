import {Component, OnInit} from "angular2/core";
import {AsyncRoute, Router, RouteDefinition, RouteConfig, Location, ROUTER_DIRECTIVES} from "angular2/router";
import {StaticComponent} from "./components/static.component";

declare var System: any;

@Component({
    selector: "app",
    templateUrl: "/scripts/app.html",
    directives: [ROUTER_DIRECTIVES]
})

export class DynamicComponent implements OnInit {
    public routes: RouteDefinition[] = null;
    constructor(private router: Router,
        private location: Location) {

    }

    ngOnInit() {
        if (this.routes === null) {
            this.routes = [
                { path: "/static", component: StaticComponent, name: "Static", useAsDefault: true },
                new AsyncRoute({
                    path: "/sub",
                    name: "Sub",
                    loader: () => System.import("scripts/components/mvc.component").then(c => c["MvcComponent"])
                }),
                new AsyncRoute({
                    path: "/numbers",
                    name: "Numbers",
                    loader: () => System.import("scripts/components/api.component").then(c => c["ApiComponent"])
                })
            ];

            this.router.config(this.routes);
        }
    }

    getLinkStyle(route: RouteDefinition) {
        return this.location.path().indexOf(route.path) > -1;
    }
}
