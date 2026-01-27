import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransactionsService } from '../../core/services/transactions.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PageEvent } from '@angular/material/paginator';
import { SearchBar } from "../../shared/components/search-bar/search-bar";
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { TxResponseMap, TxType } from '../../core/models/transaction';
import { Erc1155Table } from './components/erc1155-table/erc1155-table';
import { Erc20Table } from './components/erc20-table/erc20-table';
import { Erc721Table } from './components/erc721-table/erc721-table';
import { EthTable } from './components/eth-table/eth-table';


type AnyTransaction = TxResponseMap[keyof TxResponseMap][number];

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSelectModule,
    EthTable,
    Erc1155Table,
    Erc20Table,
    Erc721Table,
    SearchBar
],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  private readonly fb = inject(FormBuilder);
  private readonly transactionsService = inject(TransactionsService);

  txTypes = [
    { value: 'tx', label: 'Normal Transactions' },
    { value: 'erc20', label: 'ERC-20 Token Transfers' },
    { value: 'erc721', label: 'ERC-721 NFT Transfers' },
    { value: 'erc1155', label: 'ERC-1155 Multi-Token Transfers' },
  ];

  form = this.fb.group({
    startBlock: [
      0, 
      [Validators.required, Validators.pattern("^[0-9]*$")]
    ],
    txType: ['tx' as TxType, Validators.required]
  })


  transactions = signal<AnyTransaction[]>([]);
  totalCount = signal<number>(0);
  pageIndex = 0;
  pageSize = 10;

  loading = signal(false);
  error = signal<string | null>(null);

  address = '';

  ngOnInit() {
    this.form.get('startBlock')?.valueChanges
    .pipe(
      debounceTime(600),         
      distinctUntilChanged()
    )
    .subscribe(value => {
      this.fetchInitialTransactions();
    });

    this.form.get('txType')?.valueChanges
    .pipe(
      tap(() => {
        this.transactions.set([]);
      }),
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe(value => {
      this.fetchInitialTransactions();
    });
  }

  


  onSearch(value: string): void {
    this.address = value;
    this.fetchInitialTransactions();
  }

  getTransactions(): void {
    if (this.form.invalid || !this.address) return;

    this.error.set(null);
    this.loading.set(true);

    const { startBlock, txType } = this.form.value;

    this.transactionsService.getTransactions(
      this.address, 
      startBlock!, 
      this.pageIndex, 
      this.pageSize,
      txType!,
    ).subscribe({
      next: res => {
        this.transactions.set(res);
        this.loading.set(false);
        console.log('Transactions', this.transactions())
      },
      error: err => {
        this.error.set(err.error?.error ?? 'Failed to load transactions');
        this.loading.set(false);
      }
    })
  }

  fetchInitialTransactions(): void {
    if (this.form.invalid || !this.address) return;

    this.error.set(null);
    this.loading.set(true);

    this.pageIndex = 0;

    const { startBlock, txType } = this.form.value;

    this.transactionsService.getTotalTransactions(
      this.address,
      startBlock!,
      txType!

    ).subscribe({
      next: total => {
        this.totalCount.set(total);
        this.getTransactions();
      },
      error: err => {
        this.error.set(err.error?.error ?? 'Failed to load total transactions');
        this.loading.set(false);
      }
    })
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getTransactions();
  }

}
