import { FC } from 'react';
import { Button } from '@/components/ui';
import { useAppDispatch } from '@/store/hooks';
import { changeModalType, getEditedTask, showModal } from '@/store/reducers/tasks';

export const CreateTask: FC = () => {
	const dispatch = useAppDispatch();

	const handleCreateTask = () => {
		dispatch(showModal(true));
		dispatch(changeModalType('create'));
		dispatch(getEditedTask(null));
	};

	return (
		<>
			<Button $primary onClick={handleCreateTask}>
				Создать задачу
			</Button>
		</>
	);
};

export default CreateTask;
