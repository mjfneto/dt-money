import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          amount: 12000,
          type: 'income',
          category: 'Venda',
          createdAt: new Date('2021-04-13'),
        },
        {
          id: 2,
          title: 'Hamburguer',
          amount: 59,
          type: 'expense',
          category: 'Alimentação',
          createdAt: new Date('2021-04-10'),
        },
        {
          id: 3,
          title: 'Aluguel',
          amount: 1200,
          type: 'expense',
          category: 'Moradia',
          createdAt: new Date('2021-03-27'),
        },
        {
          id: 4,
          title: 'Computador',
          amount: 5400,
          type: 'income',
          category: 'Venda',
          createdAt: new Date('2021-03-15'),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => this.schema.all('transaction'));

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      data.createdAt = new Date();

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
