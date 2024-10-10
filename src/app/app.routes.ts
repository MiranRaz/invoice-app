import { Routes } from '@angular/router';
import { InvoiceDetailsComponent } from './view-invoice/view-invoice.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'view-invoice/:id',
    component: InvoiceDetailsComponent,
  },
];
