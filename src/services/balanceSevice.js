import axios from 'axios';
const getCurrentBalance = async () => {
  const { data } = await axios.get('/auth/users/current');
  console.log('data', data);
  return data.user.balance;
};

const balanceServices = { getCurrentBalance };

export default balanceServices;
