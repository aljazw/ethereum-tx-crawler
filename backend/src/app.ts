import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import transactionsRouter from './routes/transactions.js';
import { BadRequestError, ExternalApiError, NotFoundError } from './utils/errors.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', transactionsRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof NotFoundError) return res.status(404).json({ error: err.message });
    if (err instanceof BadRequestError) return res.status(400).json({ error: err.message });
    if (err instanceof ExternalApiError) return res.status(400).json({ error: err.message });
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
});

export default app;
