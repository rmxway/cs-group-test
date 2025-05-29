import { OptionValue } from '@/components/ui';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
	id: number;
	task: string;
	description?: string;
	priority: OptionValue;
}

interface InitialState {
	tasks: Task[];
}

const initialState: InitialState = {
	tasks: [],
};

const tasksSlice = createSlice({
	initialState,
	name: 'tasks',
	reducers: {
		addTask: (state, { payload }: PayloadAction<Task>) => {
			state.tasks.push(payload);
		},
		removeTask: (state, { payload }: PayloadAction<number>) => {
			state.tasks = state.tasks.filter((task) => task.id !== payload);
		},
		editTask: (state, { payload }: PayloadAction<Task>) => {
			const index = state.tasks.findIndex((task) => task.id === payload.id);
			state.tasks[index] = payload;
		},
		sortTasks: () => {},
		filterTasks: () => {},
	},
});

const { actions, reducer } = tasksSlice;

export const { addTask, editTask, filterTasks, removeTask, sortTasks } = actions;

export default reducer;
