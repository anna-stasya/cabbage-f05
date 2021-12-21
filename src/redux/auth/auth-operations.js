import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { alert, defaultModules } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/mobile/dist/PNotifyMobile.css";

axios.defaults.baseURL = 'https://obscure-meadow-53073.herokuapp.com/api';

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
    console.log(data.user.token)
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
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    defaultModules.set(PNotifyMobile, {});
    alert({
      text: `Не удалось выйти из учетной записи`,
    });
  }
});
const authOperations = {
  register,
  logIn,
  logOut,
};

export default authOperations;
