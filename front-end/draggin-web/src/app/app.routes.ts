import { Routes } from '@angular/router';
import { PrimeComponent } from './layouts/prime/prime.component';

export const routes: Routes = [
    {
        path: '',
        component: PrimeComponent,
        children: [
            {
                path: '',
                loadComponent: () => import(`./feature/dashboard/dashboard.component`)
                    .then(x => x.DashboardComponent)
            }, {
                path: 'money',
                loadComponent: () => import(`./feature/money/money.component`)
                    .then(x => x.MoneyComponent)
            }
        ]
    }
];
