import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: null,
	},
	reducers: {
		startLoading: (state) => {
			state.loading = true;
		},
		signUp: (state, action) => {
			state.accessToken = action.payload;
			state.loading = false;
		},
	},
});

export const { startLoading, signUp } = authSlice.actions;
export default authSlice.reducer;
