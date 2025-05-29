import { useAppSelector } from '@/store/hooks';
import { tasksStore } from '@/store/types';
import { Task } from '@/components';

export const TasksList = () => {
	const { tasks } = useAppSelector(tasksStore);

	return (
		<>
			<h2>Список задач</h2>
			{tasks.length > 0 ? tasks.map((task) => <Task key={task.id} {...task} />) : 'Задач не найдено'}
		</>
	);
};

export default TasksList;
