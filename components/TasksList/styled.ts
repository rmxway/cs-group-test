import styled from 'styled-components';
import { Grid } from '@/components/Layout';
import { Variants } from 'framer-motion';
import media from 'styled-media-query';

export const TasksListWrapper = styled.div`
	${Grid}:not(.grid-filter):not(.grid-tools) {
		grid-template-columns: 1fr;
		align-items: center;

		${media.greaterThan('medium')`
            grid-template-columns: 1fr 1fr 80px 60px;
        `}
	}

	.grid-tools {
		grid-template-columns: 1fr 160px;
		justify-content: space-between;
		grid-auto-flow: column;
		gap: 20px;

		${media.greaterThan('medium')`
            grid-template-columns: 1fr 185px;
        `}
	}

	.grid-filter {
		grid-template-columns: 1fr;
		grid-auto-flow: row;

		${media.greaterThan('medium')`
            grid-template-columns: 1fr 450px;
        `}
	}
`;
export const HeaderList = styled(Grid)`
	padding: 10px 20px;
	background-color: ${({ theme }) => theme.colors.gray.$2};
	border-radius: ${({ theme }) => theme.radius.borderRadius};
	margin-bottom: 10px;
	display: none;

	${media.greaterThan('medium')`
        display: grid;
    `}
`;

export const fadeVariant = (i: number = 1): Variants => ({
	hidden: {
		y: 20,
		opacity: 0,
		scale: 0.9,
	},
	visible: {
		y: 0,
		opacity: 1,
        scale: 1,
		transition: {
			duration: 0.35,
			dumping: 30,
			delay: i * 0.075,
		},
	},
});
