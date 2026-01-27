import { Component, input, Input, output, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AnyTransaction } from '../../../../core/models/transaction';
import { TableHeader } from '../table-header/table-header';
import { TransactionHashCell } from '../transaction-hash-cell/transaction-hash-cell';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-erc721-table',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    CommonModule,
    TableHeader,
    TransactionHashCell,
    
  ],
  templateUrl: './erc721-table.html',
  styleUrl: './erc721-table.css',
})
export class Erc721Table {

  @Input() set transactions(value: AnyTransaction[]) {
    this.dataSource.data = value;
  }

  totalCount = input.required<number>();
  pageSize = input.required<number>();
  pageIndex = input.required<number>();

  pageChange = output<PageEvent>();


  dataSource = new MatTableDataSource<AnyTransaction>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.paginator.page.subscribe(event => {
      this.pageChange.emit(event);
    })
  }

  readonly displayedColumns = [
    'hash',
    'from',
    'to',
    'tokenName',
    'blockNumber',
    'timeStamp'
  ];

}
