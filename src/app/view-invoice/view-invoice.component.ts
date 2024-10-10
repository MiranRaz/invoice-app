import { Component, computed, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { DUMMY_INVOICES } from '../../dummy-data/dummy-invoices';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './view-invoice.component.html',
  styleUrl: './view-invoice.component.scss',
})
export class InvoiceDetailsComponent implements OnInit {
  invoices = DUMMY_INVOICES;
  invoiceId: string | null = null;

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

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.invoiceId = params.get('id');
    });
  }
}
