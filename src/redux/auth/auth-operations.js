import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import { balanceServices } from '../../services';



axios.defaults.baseURL = 'https://second-serv.herokuapp.com/api';

//на все запроссы авторизации
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('/register', async credentials => {
  try {
    const { data } = await axios.post('auth/user/signup', credentials);
    return data;
  } catch (error) {
    defaultModules.set(PNotifyMobile, {});
    alert({
      text: `Не удалось зарегистрироваться`,
    });
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('auth/users/signin', credentials);
    token.set(data.user.token);
    console.log(data);
    return data;
  } catch (error) {
    defaultModules.set(PNotifyMobile, {});
    alert({
      text: `Не удалось авторизироваться`,
    });
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('auth/user/signout');
    token.unset();
  } catch (error) {
    console.log(error);
    defaultModules.set(PNotifyMobile, {});
    alert({
      text: `Не удалось выйти из учетной записи`,
    });
  }
});

const setBalance = createAsyncThunk('auth/setBalance', async balance => {
  try {
    console.log('зашло');
    const response = await axios.patch('/auth/users/balance', { balance });
    console.log('response', response);
    return response;
    // dispatch(
    //   transactionsActions.setTotalBalanceSuccess(response.data.user.balance),
    // );
  } catch (error) {
    defaultModules.set(PNotifyMobile, {});
    alert({
      text: `Не удалось получить баланс пользователя`,
    });
    // dispatch(transactionsActions.setTotalBalanceError(error));
  }
});

const getBalance = createAsyncThunk('balance/getBalance', async () => {
  try {
    // dispatch(balanceActions.setLoading(true));
    const { data } = await axios.get('/auth/users/current')
    console.log('получили баланс');
    return data;
    // dispatch(balanceActions.getBalance(balance));
    // dispatch(balanceActions.setLoading(false));
  } catch (error) {
    throw new Error(error.message);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
  setBalance,
  getBalance,
};

export default authOperations;
