import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Invoice } from '../../dummy-data/dummy-invoices';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-edit-invoice',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './create-edit-invoice.component.html',
  styleUrl: './create-edit-invoice.component.scss',
})
export class CreateEditInvoiceComponent {
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() invoice?: Invoice;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Invoice>();

  invoiceForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.invoiceForm = this.fb.group({
      invoiceNumber: ['', Validators.required],
      createdAt: [new Date().toISOString().split('T')[0], Validators.required],
      paymentDue: ['', Validators.required],
      description: ['', Validators.required],
      paymentTerms: [0, [Validators.required, Validators.min(1)]],
      clientName: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      status: ['Draft'],
      senderAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country: ['', Validators.required],
      }),
      clientAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country: ['', Validators.required],
      }),
      items: this.fb.array([]),
      total: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    if (this.mode === 'edit' && this.invoice) {
      this.invoiceForm.patchValue(this.invoice);
    }
  }

  closeInvoice() {
    this.close.emit();
  }

  saveInvoice(action: 'draft' | 'send') {
    console.log('saveInvoice called with action:', action);
    console.log('Form valid:', this.invoiceForm.valid);
    console.log('Form value:', this.invoiceForm.value);

    if (this.invoiceForm.valid) {
      const updatedInvoice: Invoice = this.invoiceForm.value;
      if (this.mode === 'create') {
        updatedInvoice.status = action === 'draft' ? 'Draft' : 'Pending';
      }
      console.log('Emitting invoice:', updatedInvoice); // Add this line
      this.save.emit(updatedInvoice);
    } else {
      this.formSubmitted = true;
      const randomLetters =
        String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
        String.fromCharCode(65 + Math.floor(Math.random() * 26));
      const randomNumbers = Math.floor(1000 + Math.random() * 9000);
      const invoiceNumber = `${randomLetters}${randomNumbers}`;
      this.invoiceForm.patchValue({ invoiceNumber });

      const createdAt = new Date(this.invoiceForm.get('createdAt')?.value);
      const paymentTerms = this.invoiceForm.get('paymentTerms')?.value || 30;
      const paymentDue = new Date(
        createdAt.getTime() + paymentTerms * 24 * 60 * 60 * 1000
      );
      this.invoiceForm.patchValue({
        paymentDue: paymentDue.toISOString().split('T')[0],
      });

      if (this.invoiceForm.valid) {
        const updatedInvoice: Invoice = this.invoiceForm.value;
        if (this.mode === 'create') {
          updatedInvoice.status = action === 'draft' ? 'Draft' : 'Pending';
        }
        this.save.emit(updatedInvoice);
      } else {
        Object.keys(this.invoiceForm.controls).forEach((key) => {
          const control = this.invoiceForm.get(key);
          if (control && control.errors) {
            console.error(`${key}:`, control.errors);
          }
        });
        // Mark all form controls as touched to show validation errors
        Object.values(this.invoiceForm.controls).forEach((control) => {
          control.markAsTouched();
        });
      }
    }
  }

  addItem() {
    const items = this.invoiceForm.get('items') as FormArray;
    items.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [1, [Validators.required, Validators.min(1)]],
        price: [0, [Validators.required, Validators.min(0)]],
        total: [0],
      })
    );
  }

  removeItem(index: number) {
    const items = this.invoiceForm.get('items') as FormArray;
    items.removeAt(index);
  }

  calculateTotal() {
    const items = this.invoiceForm.get('items')?.value ?? [];
    const total = items.reduce(
      (sum: number, item: { quantity: number; price: number }) =>
        sum + item.quantity * item.price,
      0
    );
    this.invoiceForm.patchValue({ total });
  }

  get itemsFormArray(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }

  getItemTotal(item: AbstractControl): number {
    const quantity = item.get('quantity')?.value ?? 0;
    const price = item.get('price')?.value ?? 0;
    return quantity * price;
  }
}
