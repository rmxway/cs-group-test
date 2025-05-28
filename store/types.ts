import { makeStore } from '.';

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = RootStore['dispatch'];

// export const tasksStore = (state: RootState) => state.tasks;
