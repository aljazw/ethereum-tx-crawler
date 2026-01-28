export interface BaseTx {
  blockNumber: string;
  blockHash: string;
  timeStamp: string;          // UNIX timestamp as string
  hash: string;
  nonce: string;
  transactionIndex: string;
  from: string;
  to: string;
  gas: string;
  gasPrice: string;
  gasUsed: string;
  cumulativeGasUsed: string;
  input: string;
  methodId: string;
  functionName: string;
  confirmations: string;
}

// Normal ETH transaction
export interface EthTransactionType extends BaseTx {
  value: string;              // in wei
  txreceipt_status: string;    // "1" = success, "0" = fail
  isError?: string;           // optional, sometimes included
}

// ERC-20 token transaction
export interface ERC20TransactionType extends BaseTx {
  value: string;              // in token base units
  contractAddress: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal: string;       // number of decimals
}

// ERC-721 NFT transaction
export interface ERC721TransactionType extends BaseTx {
  tokenID: string;
  contractAddress: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal?: string;      // usually 0
}

// ERC-1155 multi-token transaction
export interface ERC1155TransactionType extends BaseTx {
  tokenID: string;
  tokenValue: string;         // amount of tokens
  contractAddress: string;
  tokenName: string;
  tokenSymbol: string;
}

export type TxResponseMap = {
  tx: EthTransactionType[];
  erc20: ERC20TransactionType[];
  erc721: ERC721TransactionType[];
  erc1155: ERC1155TransactionType[];
};

export type TxType = keyof TxResponseMap;

export type AnyTransaction = TxResponseMap[TxType][number];

