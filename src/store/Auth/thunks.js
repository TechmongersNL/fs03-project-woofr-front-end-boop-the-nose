import axios from 'axios';
import { startLoading, signUp } from './slice';

const API_URL = 'http://127.0.0.1:8000';

export const signupThunk = (email, password) => {
	return async function thunk(dispatch, getState) {
		try {
			dispatch(startLoading());

			const response = await axios.post(`${API_URL}/owners`, {
				email,
				password,
			});

			console.log(`${API_URL}/signup`);
			const data = response.data;
			const jwt = data.token;
			console.log(jwt);

			console.log('Before setting token to lcoal storage');
			localStorage.setItem('token', jwt);
			console.log('After setting token to local storage');

			dispatch(signUp({ accessToken: jwt }));
			console.log('User signed up');
		} catch (e) {
			console.log('Error at signup', e.message);
		}
	};
};
