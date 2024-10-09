import { Component, computed, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DUMMY_INVOICES } from '../../dummy-data/dummy-invoices';

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
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  invoices = DUMMY_INVOICES;
  statuses = new FormControl<string[]>([]);
  statusesList: string[] = ['Draft', 'Pending', 'Paid'];

  totalInvoices = computed(() => this.filteredInvoices().length);

  selectedStatusesSignal = signal<string[]>([]);
  filteredInvoices = computed(() => {
    const selectedStatuses = this.selectedStatusesSignal();
    if (!selectedStatuses || selectedStatuses.length === 0) {
      return this.invoices;
    }
    return this.invoices.filter((invoice) =>
      selectedStatuses.includes(invoice.status)
    );
  });

  ngOnInit() {
    this.statuses.valueChanges.subscribe((selectedStatuses) => {
      this.selectedStatusesSignal.set(selectedStatuses || []);
    });
  }
}
