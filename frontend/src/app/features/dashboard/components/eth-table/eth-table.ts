import { Component, input, Input, output, ViewChild } from '@angular/core';
import { AnyTransaction } from '../../../../core/models/transaction';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TransactionHashCell } from '../transaction-hash-cell/transaction-hash-cell';
import { TableHeader } from '../table-header/table-header';

@Component({
  selector: 'app-eth-table',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    CommonModule,
    TableHeader,
    TransactionHashCell,
  ],
  templateUrl: './eth-table.html',
  styleUrl: './eth-table.css',
})
export class EthTable {
  @Input() set transactions(value: AnyTransaction[]) {
      this.dataSource.data = value;
    }

    totalCount = input.required<number>();
    pageSize = input.required<number>();
    pageIndex = input.required<number>();

    pageChange = output<PageEvent>();

    @ViewChild(MatPaginator) paginator!: MatPaginator;


    dataSource = new MatTableDataSource<AnyTransaction>([]);


    ngAfterViewInit() {
      this.paginator.page.subscribe(event => {
        this.pageChange.emit(event);
      })
    }

    copyToClipboard(value: string): void {
      navigator.clipboard.writeText(value);
    }

    getEth(tx: any) {
      return Number(BigInt(tx.value) / BigInt(1e12)) / 1e6; // avoids JS overflow
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
