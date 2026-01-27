import { inject, Injectable } from '@angular/core';
import { EthTransaction, TxResponseMap, TxType } from '../models/transaction';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/transactions`;

  getTransactions<T extends TxType>(
    address: string,
    startBlock: number,
    pageIndex: number,
    pageSize: number,
    txType: T,
  ): Observable<TxResponseMap[T]> {
    const page = pageIndex;
    const params = new HttpParams()
      .set('address', address)
      .set('startBlock', startBlock.toString())
      .set('page', page.toString())
      .set('offset', pageSize.toString())
      .set('txType', txType);

    return this.http.get<TxResponseMap[T]>(this.apiUrl, { params });
  }

  getTotalTransactions(
    address: string,
    startBlock: number,
    txType: string,
  ): Observable<number> {
    const params = new HttpParams()
      .set('address', address)
      .set('startBlock', startBlock.toString())
      .set('txType', txType);

    return this.http.get<number>(`${this.apiUrl}/total`, { params });
  }
}
