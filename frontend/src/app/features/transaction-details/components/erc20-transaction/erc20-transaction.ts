import { Component, input } from '@angular/core';
import { ERC20TransactionType } from '../../../../core/models/transaction';
import { BaseTransactionDetails } from "../base-transaction-details/base-transaction-details";

@Component({
  selector: 'app-erc20-transaction',
  imports: [BaseTransactionDetails],
  templateUrl: './erc20-transaction.html',
  styleUrl: './erc20-transaction.css',
})
export class Erc20Transaction {
  tx = input.required<ERC20TransactionType>();

  formatERC20(value: string, decimals: string): string {
    // Convert base units to human-readable
    const factor = 10 ** Number(decimals);
    return (Number(value) / factor).toLocaleString(undefined, { maximumFractionDigits: 6 });
  }


}
