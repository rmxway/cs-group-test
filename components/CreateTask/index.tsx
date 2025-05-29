import { FC, useRef, useState } from 'react';
import { Button, Input, OptionValue, Select } from '@/components/ui';
import { Grid } from '@/components/Layout';
import { priorities } from '@/helpers/constants';
import { useAppDispatch } from '@/store/hooks';
import { addTask, Task } from '@/store/reducers/tasks';

export const CreateTask: FC = () => {
	const [task, setTask] = useState('');
	const [description, setDescription] = useState('');
	const [priority, setPriority] = useState<OptionValue>('high');
	const dispatch = useAppDispatch();
	const selectRef = useRef<HTMLSelectElement>(null);

	const addTaskToStore = () => {
		const newTask: Task = { task, description, id: Date.now(), priority };
		dispatch(addTask(newTask));
		setTask('');
		setDescription('');
		setPriority('high');
	};

	return (
		<>
			<Grid $templateColumns="350px">
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
				<Button $primary onClick={addTaskToStore} disabled={task.length < 3}>
					Добавить задачу
				</Button>
			</Grid>
		</>
	);
};

export default CreateTask;
