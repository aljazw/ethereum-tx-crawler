import { Component, input } from '@angular/core';
import { EthTransactionType } from '../../../../core/models/transaction';
import { CommonModule } from '@angular/common';
import { BaseTransactionDetails } from "../base-transaction-details/base-transaction-details";

@Component({
  selector: 'app-eth-transaction',
  imports: [CommonModule, BaseTransactionDetails],
  templateUrl: './eth-transaction.html',
  styleUrl: './eth-transaction.css',
})
export class EthTransaction {
  tx = input.required<EthTransactionType>();
}
