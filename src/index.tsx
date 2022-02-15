import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => [
      {
        id: 1,
        title: 'Desenvolvimento de site',
        amount: 12000,
        type: 'income',
        category: 'Venda',
        date: new Date('04/13/2021'),
      },
      {
        id: 2,
        title: 'Hamburguer',
        amount: 59,
        type: 'expense',
        category: 'Alimentação',
        date: new Date('04/10/2021'),
      },
      {
        id: 3,
        title: 'Aluguel',
        amount: 1200,
        type: 'expense',
        category: 'Moradia',
        date: new Date('03/27/2021'),
      },
      {
        id: 4,
        title: 'Computador',
        amount: 5400,
        type: 'income',
        category: 'Venda',
        date: new Date('03/15/2021'),
      },
    ]);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
