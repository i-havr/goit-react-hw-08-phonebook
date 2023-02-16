export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserEmail = state => state.auth.user.email;

export const selectIsRefreshingCurrentUser = state =>
  state.auth.isRefreshingCurrentUser;
