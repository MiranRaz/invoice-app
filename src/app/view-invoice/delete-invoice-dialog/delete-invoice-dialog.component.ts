import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-invoice-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-invoice-dialog.component.html',
  styleUrl: './delete-invoice-dialog.component.scss',
})
export class DeleteInvoiceDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteInvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { invoiceNumber: string }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirmDelete(): void {
    this.dialogRef.close('delete');
  }
}
