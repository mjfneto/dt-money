import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from 'react';
import { api } from '../services/api';

export type TransactionType = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

type TransactionInput = Omit<TransactionType, 'id' | 'createdAt'>;

type TransactionsContextValue = {
  transactions: TransactionType[];
  createTransaction(transaction: TransactionInput): Promise<void>;
};

type TransactionsProviderProps = {
  children: ReactNode;
};

const TransactionsContext = createContext<TransactionsContextValue>(
  {} as TransactionsContextValue,
);

export default function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then(({ data: { transactions } }) => setTransactions(transactions));
  }, []);

  async function createTransaction(inputTransaction: TransactionInput) {
    const {
      data: { transaction },
    } = await api.post('/transactions', inputTransaction);

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
