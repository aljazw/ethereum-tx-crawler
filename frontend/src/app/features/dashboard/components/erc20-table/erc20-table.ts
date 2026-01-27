import { Component, Input, input, output, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AnyTransaction } from '../../../../core/models/transaction';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { TableHeader } from '../table-header/table-header';
import { TransactionHashCell } from "../transaction-hash-cell/transaction-hash-cell";
import { formatUnits } from 'ethers';


@Component({
  selector: 'app-erc20-table',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule,
    TableHeader,
    TransactionHashCell
],
  templateUrl: './erc20-table.html',
  styleUrl: './erc20-table.css',
})
export class Erc20Table {

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

  getERC20(value: string, tokenDecimal: string): string {
    const num = parseFloat(formatUnits(value.toString(), Number(tokenDecimal)));
    return num.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 6 });
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
