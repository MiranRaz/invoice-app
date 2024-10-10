import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Invoice } from '../../../dummy-data/dummy-invoices';

@Component({
  selector: 'app-invoices-list',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './invoices-list.component.html',
  styleUrl: './invoices-list.component.scss',
})
export class InvoicesListComponent {
  @Input({ required: true }) invoice!: Invoice;
  // invoice = input.required<Invoice>();
}
