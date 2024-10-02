export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectLoading = (state) => state.auth.loading;

export const selectIsAuthenticating = (state) => state.auth.isAuthenticating;

export const selectAuthInitialized = (state) => state.auth.authInitialized;
