import { AnimatePresence } from 'framer-motion';
import { useAppSelector } from '@/store/hooks';
import { Filter, Sort, Task } from '@/components';
import { Grid } from '@/components/Layout';
import { fadeVariant, HeaderList, TasksListWrapper } from './styled';
import { currentTasksSelector } from '@/store/selectors';
import { tasksStore } from '@/store/types';

export const TasksList = () => {
	const currentTasks = currentTasksSelector(useAppSelector(tasksStore));
	return (
		<TasksListWrapper>
			<Grid className="grid-filter">
				<h2>Список задач</h2>
				<Grid className="grid-tools">
					<Sort />
					<Filter />
				</Grid>
			</Grid>
			{currentTasks.length > 0 ? (
				<>
					<HeaderList $gap={20}>
						<div>Название</div>
						<div>Описание</div>
						<div>Приоритет</div>
					</HeaderList>
					<AnimatePresence mode="popLayout">
						{currentTasks.map((task, i) => (
							<Task
								layout
								key={task.id}
								{...task}
								variants={fadeVariant(i)}
								initial="hidden"
								animate="visible"
								exit={{ opacity: 0, scale: 0.9 }}
							/>
						))}
					</AnimatePresence>
				</>
			) : (
				'Задач не найдено'
			)}
		</TasksListWrapper>
	);
};

export default TasksList;
