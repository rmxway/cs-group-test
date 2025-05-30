import { TypeTask } from '@/components';
import { OptionValue } from '@/components/ui';
import { mockTasks } from '@/helpers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
	id: number;
	task: string;
	description?: string;
	priority: OptionValue;
}

type Sort = 'asc' | 'desc';

interface InitialState {
	tasks: Task[];
	currentTasks: Task[];
	filter: OptionValue;
	sort: Sort;
	isOpenModal: boolean;
	modalType: TypeTask;
	editedTask: Task | null;
}

const initialState: InitialState = {
	tasks: mockTasks,
	currentTasks: mockTasks,
	filter: '-',
	sort: 'asc',
	isOpenModal: false,
	modalType: 'create',
	editedTask: null,
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
            console.log(payload);

			state.tasks[index] = payload;
		},
		changeFilter: (state, { payload }: PayloadAction<OptionValue>) => {
			state.filter = payload;
		},
		filter: (state) => {
			if (state.filter === '-') {
				state.currentTasks = state.tasks;
			} else {
				state.currentTasks = state.tasks.filter((task) => task.priority === state.filter);
			}
		},
		showModal: (state, { payload }: PayloadAction<boolean>) => {
			state.isOpenModal = payload;
		},
		changeModalType: (state, { payload }: PayloadAction<TypeTask>) => {
			state.modalType = payload;
		},
		getEditedTask: (state, { payload }: PayloadAction<number | null>) => {
			if (payload === null) {
				state.editedTask = null;
			} else {
				state.editedTask = state.tasks.find((task) => task.id === payload)!;
			}
		},
	},
});

const { actions, reducer } = tasksSlice;

export const { addTask, editTask, removeTask, changeFilter, filter, showModal, changeModalType, getEditedTask } =
	actions;

export default reducer;
