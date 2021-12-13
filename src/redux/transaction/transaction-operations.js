import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import * as actions from './transaction-actions';

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchTransaction = () => async dispatch => {
  dispatch(actions.fetchTransactionRequest());

  try {
    const transactions = await axios.get('/transactions');
    dispatch(actions.fetchTransactionSuccess(transactions));
  } catch (error) {
    dispatch(actions.fetchTransactionError(error));
  }
};

export const addTransaction =
  ({ transaction }) =>
  async dispatch => {
    // const transaction = {
    //   date,
    //   descr,
    //   category,
    //   cost,
    // };

    dispatch(actions.addTransactionRequest());

    try {
      const addedTransaction = await axios.post('/transactions', transaction);
      dispatch(actions.addTransactionSuccess(addedTransaction));
    } catch (error) {
      dispatch(actions.addTransactionError(error));
    }
  };

export const deleteTransaction = transactionId => async dispatch => {
  dispatch(actions.deleteTransactionRequest());

  try {
    await axios.delete(`/transactions/${transactionId}`);
    dispatch(actions.deleteTransactionSuccess(transactionId));
  } catch (error) {
    dispatch(actions.deleteTransactionError(error));
  }
};
