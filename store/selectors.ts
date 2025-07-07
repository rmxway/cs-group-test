import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { TasksState } from './reducers/tasks';

const typedSelectorCurrentTasks = createDraftSafeSelector.withTypes<TasksState>();

export const currentTasksSelector = typedSelectorCurrentTasks(
	[(state) => state.tasks, (state) => state.filter],
	(tasks, filter) => {
		if (filter === '-') {
			return tasks;
		} else {
			return tasks.filter((task) => task.priority === filter);
		}
	},
);
