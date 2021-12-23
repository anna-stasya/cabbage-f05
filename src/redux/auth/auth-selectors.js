const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getUserAvatar = state => state.auth.user.avatarUrl;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserAvatar,
};

export default authSelectors;
