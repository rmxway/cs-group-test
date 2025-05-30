import { FC, FormEvent } from 'react';
import { OptionValue, Select } from '@/components/ui';
import { priorities } from '@/helpers';
import { useAppDispatch } from '@/store/hooks';
import { changeFilter } from '@/store/reducers/tasks';

export const Filter: FC = () => {
	const dispatch = useAppDispatch();

	const handleChangeFilter = (e: FormEvent<HTMLSelectElement>) => {
		const value = e.currentTarget.value as OptionValue;
        dispatch(changeFilter(value))
	};

	return (
		<Select
			label="Фильтр по приоритету"
			name="filter-priority"
			options={priorities}
			onChange={handleChangeFilter}
		/>
	);
};

export default Filter;
