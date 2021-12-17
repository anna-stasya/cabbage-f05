import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const getBalance = async () => {
  const { data } = await axios.get('/users/current');

  return data.user.balance;
};

const balanceServices = { getBalance };

export default balanceServices;
