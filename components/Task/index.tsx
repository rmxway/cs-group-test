import { changeModalType, getEditedTask, removeTask, showModal, Task as TaskType } from '@/store/reducers/tasks';
import { FC } from 'react';
import { Grid } from '@/components/Layout';
import { TaskWrapper } from './styled';
import { useAppDispatch } from '@/store/hooks';
import { LinkIcon } from '@/components/ui';
import { MotionProps } from 'framer-motion';

export const Task: FC<TaskType & MotionProps> = ({ id, priority, task, description, ...props }) => {
	const dispatch = useAppDispatch();

	const handleRemoveTask = () => {
		dispatch(removeTask(id));
	};

	const handleEditTask = () => {
		dispatch(showModal(true));
		dispatch(changeModalType('edit'));
		dispatch(getEditedTask(id));
	};

	return (
		<TaskWrapper {...props}>
			<Grid $gap={20} $align="center">
				<div>
					<strong>{task}</strong>
				</div>
				<div className="description">{description || '–'}</div>
				<div>{priority}</div>
				<LinkIcon icon="edit" onClick={handleEditTask} />
				<LinkIcon icon="trash" onClick={handleRemoveTask} />
			</Grid>
		</TaskWrapper>
	);
};

export default Task;
