const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getBalance = state => state.auth.balance;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getBalance,
};

export default authSelectors;
