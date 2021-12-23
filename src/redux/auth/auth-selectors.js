const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getUserAvatar = state => state.auth.user.avatarUrl;
const getBalance = state => state.auth.balance;
const getToken = state => state.auth.token;


const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserAvatar,
  getBalance,
  getToken,
};

export default authSelectors;
