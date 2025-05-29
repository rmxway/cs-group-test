import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasksReducer from '@/store/reducers/tasks';

const appReducer = combineReducers({
	tasks: tasksReducer,
});

export const store = configureStore({
	reducer: appReducer,
});

export const makeStore = () => {
	return store;
};
