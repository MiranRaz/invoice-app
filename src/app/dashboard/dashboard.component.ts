import { Component, computed, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DUMMY_INVOICES } from '../../dummy-data/dummy-invoices';
import { Router } from '@angular/router';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { CreateEditInvoiceComponent } from '../create-edit-invoice/create-edit-invoice.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    MatIconModule,
    InvoicesListComponent,
    CreateEditInvoiceComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private router: Router) {}

  invoices = DUMMY_INVOICES;
  statuses = new FormControl<string[]>([]);
  statusesList: string[] = ['Draft', 'Pending', 'Paid', 'Kraft'];
  showCreateInvoice = false;
  selectedStatusesSignal = signal<string[]>([]);

  filteredInvoices = computed(() => {
    const selectedStatuses = this.selectedStatusesSignal();
    if (!selectedStatuses || selectedStatuses.length === 0) {
      return this.invoices;
    }
    return this.invoices.filter(
      (invoice) =>
        selectedStatuses.length === 0 ||
        selectedStatuses.includes(invoice.status)
    );
  });

  totalInvoices() {
    return this.invoices.length;
  }

  viewInvoice(invoiceNumber: string) {
    this.router.navigate(['/view-invoice', invoiceNumber]);
  }

  openCreateInvoice() {
    this.showCreateInvoice = true;
  }

  closeCreateInvoice() {
    this.showCreateInvoice = false;
  }

  ngOnInit() {
    this.statuses.valueChanges.subscribe((selectedStatuses) => {
      this.selectedStatusesSignal.set(selectedStatuses || []);
    });
  }
}
