import { CommonModule } from '@angular/common';
import { Component, input, Input, output, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TableHeader } from '../table-header/table-header';
import { TransactionHashCell } from '../transaction-hash-cell/transaction-hash-cell';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AnyTransaction, TxType } from '../../../../core/models/transaction';

@Component({
  selector: 'app-erc1155-table',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule,
    TableHeader,
    TransactionHashCell
],
  templateUrl: './erc1155-table.html',
  styleUrl: './erc1155-table.css',
})
export class Erc1155Table {

  @Input() set transactions(value: AnyTransaction[]) {
    this.dataSource.data = value;
  }

  totalCount = input.required<number>();
  pageSize = input.required<number>();
  pageIndex = input.required<number>();
  txType = input.required<TxType>();
  

  pageChange = output<PageEvent>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<AnyTransaction>([]);

  ngAfterViewInit() {
    this.paginator.page.subscribe(event => {
      this.pageChange.emit(event);
    })
  }

  readonly displayedColumns = [
    'hash',
    'from',
    'to',
    'Amount',
    'blockNumber',
    'timeStamp'
  ];

}
