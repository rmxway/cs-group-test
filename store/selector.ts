import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from './types';

const typedCommonCreateSelector = createDraftSafeSelector.withTypes<RootState>();

export const currentTasksMemoized = typedCommonCreateSelector(
	[(state) => state.tasksReducer.tasks, (state) => state.tasksReducer.filter],
	(tasks, filter) => {
		let currentTasks = [];
		if (filter === '-') {
			currentTasks = tasks;
		} else {
			currentTasks = tasks.filter((task) => task.priority === filter);
		}

		return currentTasks;
	},
);
