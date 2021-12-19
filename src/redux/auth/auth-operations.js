import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001/api/auth';

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
    const { data } = await axios.post('/user/signup', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});


const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/signin', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
     console.log(error);
  }
});


const authOperations = {
  register,
  logIn,
};

export default authOperations;
