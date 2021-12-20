import axios from 'axios';
import moment from 'moment';
// import moment from 'moment';
import transactionsActions from './transaction-actions';

moment.updateLocale('ru', {
  months: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
});

axios.defaults.baseURL = 'http://localhost:3001';

export const fetchTransaction = () => async dispatch => {
  dispatch(transactionsActions.fetchExpenseRequest());

  try {
    const transactions = await axios.get('/transactions');
    dispatch(transactionsActions.fetchExpenseSuccess(transactions));
  } catch (error) {
    dispatch(transactionsActions.fetchExpenseError(error));
  }
};

const setBalance = balance => async dispatch => {
  dispatch(transactionsActions.setTotalBalanceRequest());

  try {
    const response = await axios.patch(
      '/api/auth/users/balance',
      { balance },
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzA5MjlmMjQ4MmYzMWFjZjU3NDBmZiIsImlhdCI6MTY0MDAxMDQxMCwiZXhwIjoxNjQwMDUzNjEwfQ.kk4KFjsWvBMJXKdrPS23PFWCHN3JwAWa3Y1nNEYrYTM',
        },
      },
    );
    dispatch(
      transactionsActions.setTotalBalanceSuccess(response.data.user.balance),
    );
  } catch (error) {
    dispatch(transactionsActions.setTotalBalanceError(error));
  }
};

export const addExpense = transaction => async dispatch => {
  dispatch(transactionsActions.addExpenseRequest());

  try {
    await axios.post('/api/expense', transaction, {
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzA5MjlmMjQ4MmYzMWFjZjU3NDBmZiIsImlhdCI6MTY0MDAxMDQxMCwiZXhwIjoxNjQwMDUzNjEwfQ.kk4KFjsWvBMJXKdrPS23PFWCHN3JwAWa3Y1nNEYrYTM',
      },
    });
    dispatch(transactionsActions.addExpenseSuccess());
  } catch (error) {
    dispatch(transactionsActions.addExpenseError(error.message));
  }
};

const addIncome = data => async dispatch => {
  dispatch(transactionsActions.addIncomeRequest());

  try {
    await axios.post('/api/income', data, {
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzA5MjlmMjQ4MmYzMWFjZjU3NDBmZiIsImlhdCI6MTY0MDAxMDQxMCwiZXhwIjoxNjQwMDUzNjEwfQ.kk4KFjsWvBMJXKdrPS23PFWCHN3JwAWa3Y1nNEYrYTM',
      },
    });
    dispatch(transactionsActions.addIncomeSuccess());
  } catch (error) {
    dispatch(transactionsActions.addIncomeError(error.message));
  }
};

export const deleteTransaction =
  (transactionId, onSuccess, onError, income) => async dispatch => {
    let transaction = income ? 'income' : 'expense';
    dispatch(transactionsActions.deleteTransactionRequest());

    try {
      await axios.delete(`/api/${transaction}/${transactionId}`, {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzA5MjlmMjQ4MmYzMWFjZjU3NDBmZiIsImlhdCI6MTY0MDAxMDQxMCwiZXhwIjoxNjQwMDUzNjEwfQ.kk4KFjsWvBMJXKdrPS23PFWCHN3JwAWa3Y1nNEYrYTM',
        },
      });
      dispatch(transactionsActions.deleteTransactionSuccess(transactionId));
      onSuccess();
    } catch (error) {
      onError(error);
      dispatch(transactionsActions.deleteTransactionError(error));
    }
  };

const getExpenseByDate = date => async dispatch => {
  dispatch(transactionsActions.getExpenseByDateRequest());
  const month = moment(Number(date)).format('MMMM');

  try {
    const { data } = await axios.get(`/api/expense?month=${month}`, {
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzA5MjlmMjQ4MmYzMWFjZjU3NDBmZiIsImlhdCI6MTY0MDAxMDQxMCwiZXhwIjoxNjQwMDUzNjEwfQ.kk4KFjsWvBMJXKdrPS23PFWCHN3JwAWa3Y1nNEYrYTM',
      },
    });
    dispatch(transactionsActions.getExpenseByDateSuccess(data));
  } catch (error) {
    dispatch(transactionsActions.getExpenseByDateError());
  }
};

const getIncomeByDate = date => async dispatch => {
  dispatch(transactionsActions.getIncomeByDateRequest());
  const month = moment(Number(date)).format('MMMM');

  try {
    const { data } = await axios.get(`/api/income?month=${month}`, {
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzA5MjlmMjQ4MmYzMWFjZjU3NDBmZiIsImlhdCI6MTY0MDAxMDQxMCwiZXhwIjoxNjQwMDUzNjEwfQ.kk4KFjsWvBMJXKdrPS23PFWCHN3JwAWa3Y1nNEYrYTM',
      },
    });
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
