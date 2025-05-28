import { combineReducers, configureStore } from '@reduxjs/toolkit';

const appReducer = combineReducers({
	tasks: {},
});

export const store = configureStore({
	reducer: appReducer,
});

export const makeStore = () => {
	const isServer = typeof window === 'undefined';

	if (isServer) {
		return store;
	}

	return store;
};
