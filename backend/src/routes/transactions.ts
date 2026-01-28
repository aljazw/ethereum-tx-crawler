import { Router } from 'express';
import { getTransactionsCountByAddress, getTransactionsByAddress } from '../services/etherscan.js';
import { BadRequestError } from '../utils/errors.js';

const router = Router();

router.get('/transactions', async (req, res) => {
    const { address, startBlock = 0, page = 1, offset = 10, sort = 'asc', txType = 'tx' } = req.query as {
        address: string;
        startBlock: string;
        page: string;
        offset: string;
        sort: 'asc' | 'desc';
        txType: 'tx' | 'erc20' | 'erc721' | 'erc1155';
    };

    if (!address) {
        throw new BadRequestError('Missing required parameter: address');
    }

    if (!startBlock) {
        throw new BadRequestError('Missing required parameter: startBlock');
    }

    const transactions = await getTransactionsByAddress(
        address,
        Number(startBlock),
        Number(page),
        Number(offset),
        sort,
        txType
    );

    res.json( transactions );
});

router.get('/transactions/total', async (req, res) => {
    const { address, startBlock = 0, txType = 'tx' } = req.query as {
        address: string;
        startBlock: string;
        txType: 'tx' | 'erc20' | 'erc721' | 'erc1155';
    };

    if (!address) {
        throw new BadRequestError('Missing required parameter: address');
    }

    if (!startBlock) {
        throw new BadRequestError('Missing required parameter: startBlock');
    }

    const transactionsCount = await getTransactionsCountByAddress(
        address,
        Number(startBlock),
        txType
    );

    res.json(transactionsCount);
});

export default router;
