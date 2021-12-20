import axios from 'axios';

const getBalance = async () => {
  const { data } = await axios.get('/users/current');

  return data.user.balance;
};

const balanceServices = { getBalance };

export default balanceServices;
