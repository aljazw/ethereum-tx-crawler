import { Component, input } from '@angular/core';
import { AnyTransaction } from '../../../../core/models/transaction';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-transaction-details',
  imports: [CommonModule],
  templateUrl: './base-transaction-details.html',
  styleUrl: './base-transaction-details.css',
})
export class BaseTransactionDetails {
  tx = input.required<AnyTransaction>();
}
