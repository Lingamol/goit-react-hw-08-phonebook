export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selecRegError = state => state.auth.regError;
export const selecLogError = state => state.auth.logError;
export const selecAuthIsLoading = state => state.auth.authIsLoading;
