import { Route } from '@angular/router';

import { FormHomeComponent } from './components/form-home.component';
import { FormExample1Component } from './components/form-example1/form-example1.component';

export const FORM_ROUTES: Route = {
    path: 'forms',
    component: FormHomeComponent,
    children: [
        { path: 'example1', component: FormExample1Component }
    ]
}