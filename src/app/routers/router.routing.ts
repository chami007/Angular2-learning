import { Route } from '@angular/router';

import { RouterExample1Component } from './components/router-example1.component';

export const ROUTE_ROUTES: Route = {
    path: 'routers',
    children: [
        { path: '', component: RouterExample1Component }
    ]
}