import { configureStore } from '@reduxjs/toolkit';
import woofsReducer from './Woofs/slice';
import authReducer from './Auth/slice';

const store = configureStore({
	reducer: {
		woofs: woofsReducer,
		auth: authReducer,
		// owners: will go here
	},
});

export default store;
