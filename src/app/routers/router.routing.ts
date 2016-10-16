import { Route } from '@angular/router';

import { RouterExample1Component } from './example1/router-example1.component';
import { RoutingExample1AboutComponent } from './example1/routing-example1-about.component';

export const ROUTE_ROUTES: Route = {
    path: 'routers',
    children: [
        { path: '', component: RouterExample1Component },
        { path: 'about/:username', component: RoutingExample1AboutComponent }
    ]
}