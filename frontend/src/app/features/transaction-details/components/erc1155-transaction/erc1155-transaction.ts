import { Component, input } from '@angular/core';
import { ERC1155TransactionType } from '../../../../core/models/transaction';
import { BaseTransactionDetails } from "../base-transaction-details/base-transaction-details";

@Component({
  selector: 'app-erc1155-transaction',
  imports: [BaseTransactionDetails],
  templateUrl: './erc1155-transaction.html',
  styleUrl: './erc1155-transaction.css',
})
export class Erc1155Transaction {
  tx = input.required<ERC1155TransactionType>();
}
