import axios from 'axios';

const getCurrentBalance = async () => {
  const { data } = await axios.get('/auth/users/current'
  // ,
  //   {
  //   headers: {
  //     authorization:
  //       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzA5MjlmMjQ4MmYzMWFjZjU3NDBmZiIsImlhdCI6MTY0MDAxMDQxMCwiZXhwIjoxNjQwMDUzNjEwfQ.kk4KFjsWvBMJXKdrPS23PFWCHN3JwAWa3Y1nNEYrYTM',
  //   },
  //   }
  );
  console.log(data)

  return data.user.balance;
};

const balanceServices = { getCurrentBalance };

export default balanceServices;
