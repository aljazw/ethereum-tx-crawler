import { Component, input } from '@angular/core';
import { ERC721TransactionType } from '../../../../core/models/transaction';
import { BaseTransactionDetails } from "../base-transaction-details/base-transaction-details";

@Component({
  selector: 'app-erc721-transaction',
  imports: [BaseTransactionDetails],
  templateUrl: './erc721-transaction.html',
  styleUrl: './erc721-transaction.css',
})
export class Erc721Transaction {
  tx = input.required<ERC721TransactionType>();

}
