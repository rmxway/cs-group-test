import { FC } from 'react';
import { SortWrapper } from './styled';
import { Icon } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { tasksStore } from '@/store/types';
import { changeSort } from '@/store/reducers/tasks';

export const Sort: FC = () => {
	const { sort } = useAppSelector(tasksStore);
	const dispatch = useAppDispatch();
	const handleToggleSort = () => dispatch(changeSort(!sort));

	return (
		<SortWrapper $toggle={sort} onClick={handleToggleSort}>
			Сортировка по дате <Icon icon="arrow-down" as={'i'} />
		</SortWrapper>
	);
};

export default Sort;
