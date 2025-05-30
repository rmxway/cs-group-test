import styled from 'styled-components';
import { Grid } from '@/components/Layout';
import { Variants } from 'framer-motion';

export const TasksListWrapper = styled.div`
	${Grid}:not(.grid-filter) {
		grid-template-columns: 1fr 1fr 100px 30px 30px;
		align-items: center;
	}
`;
export const HeaderList = styled(Grid)`
	padding: 10px 20px;
	background-color: ${({ theme }) => theme.colors.gray.$2};
	border-radius: ${({ theme }) => theme.radius.borderRadius};
	margin-bottom: 10px;
`;

export const fadeVariant = (i: number = 1): Variants => ({
	hidden: {
		y: 20,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.35,
			dumping: 30,
			delay: i * 0.075,
		},
	},
});
