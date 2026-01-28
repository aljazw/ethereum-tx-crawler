import { Component, inject, signal } from '@angular/core';
import { AnyTransaction, ERC1155TransactionType, ERC20TransactionType, ERC721TransactionType, EthTransactionType, TxType } from '../../core/models/transaction';
import { CommonModule } from '@angular/common';
import { EthTransaction } from './components/eth-transaction/eth-transaction';
import { Erc20Transaction } from './components/erc20-transaction/erc20-transaction';
import { Erc721Transaction } from './components/erc721-transaction/erc721-transaction';
import { Erc1155Transaction } from './components/erc1155-transaction/erc1155-transaction';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-transaction-details',
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    EthTransaction,
    Erc20Transaction,
    Erc721Transaction,
    Erc1155Transaction,
  ],
  templateUrl: './transaction-details.html',
  styleUrl: './transaction-details.css',
})
export class TransactionDetails {

  tx = signal<AnyTransaction | null>(null);
  txType = signal<TxType | undefined>(undefined);

  private location = inject(Location);

  ngOnInit() {
    const state = this.location.getState() as { transaction?: AnyTransaction; txType?: TxType } | null;
    if (state?.transaction) {
      this.tx.set(state.transaction);
      this.txType.set(state.txType);
    }
  }

  goBack() {
    this.location.back();
  }


  get ethTx(): EthTransactionType {
    return this.tx() as EthTransactionType;
  }

  get erc20Tx(): ERC20TransactionType {
    return this.tx() as ERC20TransactionType;
  }

  get erc721Tx(): ERC721TransactionType {
    return this.tx() as ERC721TransactionType;
  }

  get erc1155Tx(): ERC1155TransactionType {
    return this.tx() as ERC1155TransactionType;
  }

  

}
