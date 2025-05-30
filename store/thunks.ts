import { Action, Middleware } from 'redux';
import { filter } from './reducers/tasks';
import { RootStore } from './types';

const filterAndSortTasks: Middleware = (state) => (next) => (action) => {
	next(action);

	const rootState = state as RootStore;

	if ((action as Action).type !== filter.type) {
		rootState.dispatch({ type: filter.type });
	}
};

export const middlewares = [filterAndSortTasks];
