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
export interface EthTransaction extends BaseTx {
  value: string;              // in wei
  txReceiptStatus: string;    // "1" = success, "0" = fail
  isError?: string;           // optional, sometimes included
}

// ERC-20 token transaction
export interface ERC20Transaction extends BaseTx {
  value: string;              // in token base units
  contractAddress: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal: string;       // number of decimals
}

// ERC-721 NFT transaction
export interface ERC721Transaction extends BaseTx {
  tokenID: string;
  contractAddress: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal?: string;      // usually 0
}

// ERC-1155 multi-token transaction
export interface ERC1155Transaction extends BaseTx {
  tokenID: string;
  tokenValue: string;         // amount of tokens
  contractAddress: string;
  tokenName: string;
  tokenSymbol: string;
}

export type TxResponseMap = {
  tx: EthTransaction[];
  erc20: ERC20Transaction[];
  erc721: ERC721Transaction[];
  erc1155: ERC1155Transaction[];
};

export type TxType = keyof TxResponseMap;

export type AnyTransaction = TxResponseMap[TxType][number];

