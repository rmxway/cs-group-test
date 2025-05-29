import { removeTask, Task as TaskType } from '@/store/reducers/tasks';
import { FC } from 'react';
import { Grid } from '@/components/Layout';
import { DeleteButton, TaskWrapper } from './styled';
import { useAppDispatch } from '@/store/hooks';

export const Task: FC<TaskType> = ({ id, priority, task, description }) => {
	const dispatch = useAppDispatch();

	const handleRemoveTask = () => {
		dispatch(removeTask(id));
	};
	return (
		<TaskWrapper>
			<Grid $templateColumns="1fr 100px 1fr 30px" $gap={20} $align="center">
				<div>
					<strong>{task}</strong>
				</div>
				<div>{priority}</div>
				<div>{description}</div>
				<DeleteButton onClick={handleRemoveTask}>&times;</DeleteButton>
			</Grid>
		</TaskWrapper>
	);
};

export default Task;
