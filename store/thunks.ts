import { Action, Middleware } from 'redux';
import { addTask, changeFilter, changeSort, editTask, filter, removeTask, sort } from './reducers/tasks';
import { RootStore } from './types';

const filterAndSortTasks: Middleware = (state) => (next) => (action) => {
	next(action);

	const rootState = state as RootStore;

	if (
		(action as Action).type == addTask.type ||
		(action as Action).type == removeTask.type ||
		(action as Action).type == editTask.type ||
		(action as Action).type == changeFilter.type ||
		(action as Action).type == changeSort.type
	) {
		rootState.dispatch({ type: sort.type });
		rootState.dispatch({ type: filter.type });
	}
};

export const middlewares = [filterAndSortTasks];
