import axios from 'axios';
import { startLoading, signUp } from './slice';

const API_URL = 'http://127.0.0.1:8000';

export const signupThunk = (email, password, navigate) => {
	return async function thunk(dispatch, getState) {
		try {
			dispatch(startLoading());

			const response = await axios.post(`${API_URL}/owners`, {
				email,
				password,
			});

			console.log(`${API_URL}/signup`);
			const data = response.data.email;
			if (data) {
				dispatch(signUp(true));
				console.log('User signed up');
				navigate('/login');
			}
		} catch (e) {
			console.log('Error at signup', e.message);
		}
	};
};
