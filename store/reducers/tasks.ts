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

interface InitialState {
	tasks: Task[];
	filter: OptionValue;
	sort: boolean;
	isOpenModal: boolean;
	modalType: TypeTask;
	editedTask: Task | null;
}

const initialState: InitialState = {
	tasks: mockTasks,
	filter: '-',
	sort: false,
	isOpenModal: false,
	modalType: 'create',
	editedTask: null,
};

const tasksReducer = createSlice({
	initialState,
	name: 'tasksReducer',
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
		changeSort: (state, { payload }: PayloadAction<boolean>) => {
			state.sort = payload;
		},
		sort: (state) => {
			const compare = (a: Task, b: Task) => {
				if (a.id < b.id) {
					return state.sort ? 1 : -1;
				}
				if (a.id > b.id) {
					return state.sort ? -1 : 1;
				}
				return 0;
			};

			state.tasks = state.tasks.sort(compare);
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

const { actions, reducer } = tasksReducer;

export const {
	addTask,
	editTask,
	removeTask,
	changeFilter,
	changeSort,
	sort,
	showModal,
	changeModalType,
	getEditedTask,
} = actions;

export default reducer;
