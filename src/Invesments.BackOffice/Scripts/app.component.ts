import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { SampleComponent, AnotherSampleComponent } from './sample.components';
import {DynamicComponent} from './dynamic.component';

@Component({
    selector: 'my-app',
    template: ` 
         
         <nav class="btn-group" role="group" aria-label="..."> 
             <a href="" [routerLink]="['Sample']" class="btn btn-default">Trade Feeds</a> 
             <a href="" [routerLink]="['AnotherSample']" class="btn btn-default">Security Master</a>
             <a href="" [routerLink]="['DynamicRoute']" class="btn btn-default">Dynamic Route</a> 
         </nav> 
          
         <router-outlet></router-outlet> 
     `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/sample', name: 'Sample', component: SampleComponent, useAsDefault: true },
    { path: '/another-sample', name: 'AnotherSample', component: AnotherSampleComponent },
    { path: '/dynamic-route', name: 'DynamicRoute', component: DynamicComponent },
    { path: '/**', redirectTo: ['Sample'] }
])
export class AppComponent { }