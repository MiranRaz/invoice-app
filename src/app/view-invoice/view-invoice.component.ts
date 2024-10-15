import { Component, computed, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { DUMMY_INVOICES, Invoice } from '../../dummy-data/dummy-invoices';
import { CommonModule } from '@angular/common';
import { CreateEditInvoiceComponent } from '../create-edit-invoice/create-edit-invoice.component';
import { DeleteInvoiceDialogComponent } from './delete-invoice-dialog/delete-invoice-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    CreateEditInvoiceComponent,
    DeleteInvoiceDialogComponent,
    MatDialogModule,
  ],
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}
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

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteInvoiceDialogComponent, {
      width: '480px',
      data: { invoiceNumber: this.pickedInvoice()?.invoiceNumber },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'delete') {
        this.deleteInvoice(this.pickedInvoice()?.invoiceNumber);
        this.router.navigate(['/']);
      }
    });
  }

  deleteInvoice(invoiceNumber: string | undefined) {
    if (invoiceNumber) {
      const index = this.invoices.findIndex(
        (inv) => inv.invoiceNumber === invoiceNumber
      );
      if (index !== -1) {
        this.invoices.splice(index, 1);
        console.log(`Invoice ${invoiceNumber} deleted`);
      } else {
        console.log(`Invoice ${invoiceNumber} not found`);
      }
    }
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.invoiceId = params.get('id');
    });
  }
}
