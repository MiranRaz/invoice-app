import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-create-edit-invoice',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './create-edit-invoice.component.html',
  styleUrl: './create-edit-invoice.component.scss',
})
export class CreateEditInvoiceComponent {
  @Output() close = new EventEmitter<void>();

  closeInvoice() {
    this.close.emit();
  }
}
