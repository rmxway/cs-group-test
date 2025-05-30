import { FC, KeyboardEvent, useRef, useState } from 'react';
import { Button, Input, OptionValue, Select } from '@/components/ui';
import { Grid } from '@/components/Layout';
import { priorities } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addTask, editTask, Task } from '@/store/reducers/tasks';
import { tasksStore } from '@/store/types';

export type TypeTask = 'create' | 'edit';
interface EditTaskProps {
	type: TypeTask;
	onSave: () => void;
}

export const EditTask: FC<EditTaskProps> = ({ onSave, type }) => {
	const { editedTask } = useAppSelector(tasksStore);

	const [task, setTask] = useState(editedTask?.task || '');
	const [description, setDescription] = useState(editedTask?.description || '');
	const [priority, setPriority] = useState<OptionValue>(editedTask?.priority || '-');
	const dispatch = useAppDispatch();

	const selectRef = useRef<HTMLSelectElement>(null);

	const saveTaskToStore = () => {
		const newTask: Task = { task, description, id: editedTask?.id || Date.now(), priority };
		dispatch(type === 'create' ? addTask(newTask) : editTask(newTask));
		setTask('');
		setDescription('');
		setPriority('-');
		onSave();
	};

	const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		console.log(e.key);
		if (e.key === 'Enter' && task.length > 2) {
			saveTaskToStore();
		}
	};

	return (
		<>
			<Grid $templateColumns="350px" onKeyDown={onEnter}>
				<div>
					<Input
						name="name"
						type="text"
						value={task}
						label="Название"
						onChange={(e) => setTask(e.currentTarget.value)}
					/>
					<Input
						name="description"
						type="text"
						value={description}
						label="Описание"
						onChange={(e) => setDescription(e.currentTarget.value)}
					/>
				</div>
				<Select
					ref={selectRef}
					label="Выберите приоритет"
					name="select-priority"
					value={priority}
					options={priorities}
					onChange={(e) => setPriority(e.currentTarget.value as OptionValue)}
				/>
				<Button $primary onClick={saveTaskToStore} disabled={task.length < 3}>
					{type === 'create' ? 'Добавить задачу' : 'Сохранить изменения'}
				</Button>
			</Grid>
		</>
	);
};

export default EditTask;
