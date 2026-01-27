import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-transaction-hash-cell',
  imports: [
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './transaction-hash-cell.html',
  styleUrl: './transaction-hash-cell.css',
})
export class TransactionHashCell {

  hash =  input.required<string>();

  copyToClipboard(value: string): void {
    navigator.clipboard.writeText(value);
  }

}
