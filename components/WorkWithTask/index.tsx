import { FC } from 'react';
import { Modal } from '@/components/ui';
import { EditTask } from '@/components';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { tasksStore } from '@/store/types';
import { showModal } from '@/store/reducers/tasks';

export const WorkWithTask: FC = () => {
	const { isOpenModal, modalType } = useAppSelector(tasksStore);

	const dispatch = useAppDispatch();

	const handleCloseModal = () => dispatch(showModal(false));
	return (
		<>
			<Modal
				isOpen={isOpenModal}
				onClose={handleCloseModal}
				title={modalType === 'create' ? 'Создать задачу' : 'Редактировать задачу'}
			>
				<EditTask type={modalType} onSave={handleCloseModal} />
			</Modal>
		</>
	);
};

export default WorkWithTask;
