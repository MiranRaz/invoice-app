import { Component, computed, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { DUMMY_INVOICES, Invoice } from '../../dummy-data/dummy-invoices';
import { CommonModule } from '@angular/common';
import { CreateEditInvoiceComponent } from '../create-edit-invoice/create-edit-invoice.component';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [MatIconModule, CommonModule, CreateEditInvoiceComponent],
  templateUrl: './view-invoice.component.html',
  styleUrl: './view-invoice.component.scss',
})
export class InvoiceDetailsComponent implements OnInit {
  invoices = DUMMY_INVOICES;
  invoiceId: string | null = null;
  showEditInvoice = false;

  pickedInvoice = computed(() => {
    return this.invoices.find(
      (invoice) => invoice.invoiceNumber === this.invoiceId
    );
  });

  constructor(private route: ActivatedRoute, private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }

  getInvoiceStatus(): string {
    return this.pickedInvoice()?.status || '';
  }

  openEditInvoice() {
    this.showEditInvoice = true;
  }

  closeEditInvoice() {
    this.showEditInvoice = false;
  }

  saveEditedInvoice(updatedInvoice: Invoice) {
    const index = this.invoices.findIndex(
      (inv) => inv.invoiceNumber === updatedInvoice.invoiceNumber
    );
    if (index !== -1) {
      this.invoices[index] = updatedInvoice;
    }
    this.closeEditInvoice();
  }

  markAsPaid() {
    if (this.pickedInvoice()) {
      const updatedInvoice = { ...this.pickedInvoice()!, status: 'Paid' };
      const index = this.invoices.findIndex(
        (inv) => inv.invoiceNumber === updatedInvoice.invoiceNumber
      );
      if (index !== -1) {
        this.invoices[index] = updatedInvoice;
        this.pickedInvoice = computed(() => {
          return this.invoices.find(
            (invoice) => invoice.invoiceNumber === this.invoiceId
          );
        });
      }
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.invoiceId = params.get('id');
    });
  }
}
