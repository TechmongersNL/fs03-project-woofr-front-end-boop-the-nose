import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		loading: null,
	},
	reducers: {
		startLoading: (state) => {
			state.loading = true;
		},
		signUp: (state) => {
			state.loading = false;
		},
	},
});

export const { startLoading, signUp } = authSlice.actions;
export default authSlice.reducer;
