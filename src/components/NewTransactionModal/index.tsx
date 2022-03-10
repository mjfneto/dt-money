import React, { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import useTransactions from '../../hooks/useTransactions';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [transactionTitle, setTransactionTitle] = useState('');
  const [transactionValue, setTransactionValue] = useState(0);
  const [transactionType, setTransactionType] = useState<'income' | 'expense'>(
    'income',
  );
  const [transactionCategory, setTransactionCategory] = useState('');

  async function handleCreateNewTransaction(e: React.FormEvent) {
    e.preventDefault();

    await createTransaction({
      title: transactionTitle,
      amount: transactionValue,
      type: transactionType,
      category: transactionCategory,
    });

    setTransactionTitle('');
    setTransactionValue(0);
    setTransactionType('income');
    setTransactionCategory('');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button
          type="button"
          className="react-modal-close"
          onClick={onRequestClose}
        >
          <img src={closeImg} alt="fechar"></img>
        </button>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={transactionTitle}
          onChange={(e) => setTransactionTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          step="0.01"
          min="0"
          value={transactionValue}
          onChange={(e) => setTransactionValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setTransactionType('income');
            }}
            isActive={transactionType === 'income'}
            transactionType={transactionType}
          >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setTransactionType('expense');
            }}
            isActive={transactionType === 'expense'}
            transactionType={transactionType}
          >
            <img src={outcomeImg} alt="saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={transactionCategory}
          onChange={(e) => setTransactionCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
