import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { AnyTransaction, TxType } from '../../../../core/models/transaction';

@Component({
  selector: 'app-transaction-hash-cell',
  imports: [
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './transaction-hash-cell.html',
  styleUrl: './transaction-hash-cell.css',
})
export class TransactionHashCell {

  transaction =  input.required<AnyTransaction>();
  txType = input.required<TxType>();

  copyToClipboard(value: string): void {
    navigator.clipboard.writeText(value);
  }

}
