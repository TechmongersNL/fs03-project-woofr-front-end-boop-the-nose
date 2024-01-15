export const getAuthLoading = (reduxState) => reduxState.auth.loading;
export const isLoggedIn = ({ auth }) => !!auth.token;
