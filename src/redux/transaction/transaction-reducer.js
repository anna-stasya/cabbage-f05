import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './transaction-actions';

const transactions = createReducer([], {
  [actions.fetchTransactionSuccess]: (_, { payload }) => payload,

  [actions.addTransactionSuccess]: (state, { payload }) => [...state, payload],

  [actions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(transaction => transaction.id !== payload),
});

const loading = createReducer(false, {
  [actions.fetchTransactionRequest]: () => true,
  [actions.fetchTransactionSuccess]: () => false,
  [actions.fetchTransactionError]: () => false,
  [actions.addTransactionRequest]: () => true,
  [actions.addTransactionSuccess]: () => false,
  [actions.addTransactionError]: () => false,
  [actions.deleteTransactionRequest]: () => true,
  [actions.deleteTransactionSuccess]: () => false,
  [actions.deleteTransactionError]: () => false,
});

const error = createReducer(null, {
  [actions.fetchTransactionError]: (_, { payload }) => payload,
  [actions.addTransactionError]: (_, { payload }) => payload,
  [actions.deleteTransactionError]: (_, { payload }) => payload,
  [actions.fetchTransactionRequest]: () => null,
  [actions.addTransactionRequest]: () => null,
  [actions.deleteTransactionRequest]: () => null,
});

export default combineReducers({ transactions, loading, error });
