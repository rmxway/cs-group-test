import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasksReducer from '@/store/reducers/tasks';
import { middlewares } from './thunks';

const appReducer = combineReducers({
	tasks: tasksReducer,
});

export const store = configureStore({
	reducer: appReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
});

export const makeStore = () => {
	return store;
};
