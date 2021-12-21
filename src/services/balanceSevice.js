import axios from 'axios';

const getBalance = async () => {
  const { data } = await axios.get('/api/auth/users/current', {
    headers: {
      authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzA5MjlmMjQ4MmYzMWFjZjU3NDBmZiIsImlhdCI6MTY0MDAxMDQxMCwiZXhwIjoxNjQwMDUzNjEwfQ.kk4KFjsWvBMJXKdrPS23PFWCHN3JwAWa3Y1nNEYrYTM',
    },
  });

  return data.user.balance;
};

const balanceServices = { getBalance };

export default balanceServices;
