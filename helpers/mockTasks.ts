import { Task } from '@/store/reducers/tasks';

export const mockTasks: Task[] = [
	{
		id: 1,
		priority: 'high',
		task: 'Доработать приложение',
		description: 'Исправить баги, избавиться от легаси кода',
	},
	{
		id: 2,
		priority: 'high',
		task: 'Перейти на React',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus velit porro animi reprehenderit incidunt repellat, tempora, explicabo voluptas officia quia soluta aliquam hic. Dolorem est inventore totam tempora quod excepturi officia, qui reiciendis modi et deleniti tempore perspiciatis, ad voluptatem sint alias cum quis, nihil ab enim doloribus illum',
	},
	{
		id: 3,
		priority: 'middle',
		task: 'Поправить стили',
		description:
			'Totam delectus velit porro animi reprehenderit incidunt repellat, tempora, explicabo voluptas officia quia soluta aliquam hic',
	},
];
