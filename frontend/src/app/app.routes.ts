import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { TransactionDetails } from './features/transaction-details/transaction-details';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: ':hash', component: TransactionDetails }
];
