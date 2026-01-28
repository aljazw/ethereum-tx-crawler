import axios from 'axios';
import Web3 from 'web3';
import { ExternalApiError, NotFoundError } from '../utils/errors.js';
import type { TxResponseMap, TxType } from '../types/etherscan.js';

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY!;

const actionMap: Record<TxType, string> = {
  erc20: 'tokentx',
  erc721: 'tokennfttx',
  erc1155: 'token1155tx',
  tx: 'txlist'
};

export async function getTransactionsByAddress<T extends TxType>(
  address: string,
  startBlock: number = 0,
  page: number,
  offset: number = 10,
  sort: 'asc' | 'desc' = 'asc',
  txType: T
): Promise<TxResponseMap[T]> {

  if (offset === 0) offset = 10;

  const baseParams = {
    apikey: ETHERSCAN_API_KEY,
    module: 'account',
    address,
    startblock: startBlock,
    endblock: 99999999,
    page: page + 1,
    offset,
    sort,
    chainid: 1
  };

  const action = actionMap[txType];

  const params = { ...baseParams, action };

  const data = await fetchEtherscanData(params);


  return data.result as TxResponseMap[T];
}


export async function getTransactionsCountByAddress<T extends TxType>(
  address: string,
  startBlock: number = 0,
  txType: T
): Promise<number> {

  const baseParams = {
    apikey: ETHERSCAN_API_KEY,
    module: 'account',
    address,
    startblock: startBlock,
    endblock: 99999999,
    page: 0,
    chainid: 1
  };

  const action = actionMap[txType] || 'txlist';
  const params = { ...baseParams, action };
  
  const data = await fetchEtherscanData(params);

  return (data.result as TxResponseMap[T]).length;
}


export async function fetchEtherscanData(params: Record<string, any>) {
  const start = Date.now();

  const response = await axios.get('https://api.etherscan.io/v2/api', { params });

  const end = Date.now();
  const seconds = (end - start) / 1000;
  console.log(`Request took ${seconds.toFixed(2)} seconds`);

  const data = response.data;

  if (data.status !== '1') {
    throw new ExternalApiError(
      `Etherscan API error: ${data.message || data.result || 'Unknown error'}`
    );
  }

  if (!data.result || data.result.length === 0) {
    throw new NotFoundError('No results returned by Etherscan');
  }

  return data;
}