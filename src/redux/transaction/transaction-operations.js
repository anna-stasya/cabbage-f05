import axios from 'axios';
import transactionsActions from './transaction-actions';

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchTransaction = () => async dispatch => {
  dispatch(transactionsActions.fetchExpenseRequest());

  try {
    const transactions = await axios.get('/transactions');
    dispatch(transactionsActions.fetchExpenseSuccess(transactions));
  } catch (error) {
    dispatch(transactionsActions.fetchExpenseError(error));
  }
};

const setBalance = balance => async (dispatch, getState) => {
  dispatch(transactionsActions.setTotalBalanceRequest());

  try {
    const response = await fetch.setBalance(balance);
    dispatch(
      transactionsActions.setTotalBalanceSuccess(response.data.data.balance),
    );
  } catch (error) {
    dispatch(transactionsActions.setTotalBalanceError(error));
  }
};

export const addExpense =
  (transaction, onSuccess, onError) => async dispatch => {
    dispatch(transactionsActions.addExpenseRequest());

    try {
      await axios.post('/transactions/addExpense', transaction);
      dispatch(transactionsActions.addExpenseSuccess());
      onSuccess();
    } catch (error) {
      onError(error);
      dispatch(transactionsActions.addExpenseError(error.message));
    }
  };

const addIncome = (data, onSuccess, onError) => async dispatch => {
  dispatch(transactionsActions.addIncomeRequest());

  try {
    await axios.post('/transactions/addIncome', data);
    dispatch(transactionsActions.addIncomeSuccess());
    onSuccess();
  } catch (error) {
    onError(error);
    dispatch(transactionsActions.addIncomeError(error.message));
  }
};

export const deleteTransaction = transactionId => async dispatch => {
  dispatch(transactionsActions.deleteTransactionRequest());

  try {
    await axios.delete(`/transactions/${transactionId}`);
    dispatch(transactionsActions.deleteTransactionSuccess(transactionId));
  } catch (error) {
    dispatch(transactionsActions.deleteTransactionError(error));
  }
};

const getExpenseByDate = date => async dispatch => {
  dispatch(transactionsActions.getExpenseByDateRequest());

  try {
    const { data } = await axios.get(`/transactions/getExpenseByDate/${date}`);
    dispatch(transactionsActions.getExpenseByDateSuccess(data));
  } catch (error) {
    dispatch(transactionsActions.getExpenseByDateError());
  }
};

const getIncomeByDate = date => async dispatch => {
  dispatch(transactionsActions.getIncomeByDateRequest());

  try {
    const { data } = await axios.get(`/transactions/getIncomeByDate/${date}`);
    dispatch(transactionsActions.getIncomeByDateSuccess(data));
  } catch (error) {
    dispatch(transactionsActions.getIncomeByDateError(error));
  }
};

const counterOperations = {
  fetchTransaction,
  setBalance,
  addExpense,
  addIncome,
  getExpenseByDate,
  getIncomeByDate,
  deleteTransaction,
};

export default counterOperations;
