import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const TaskWrapper = styled(motion.div)`
	${({ theme }) => css`
		display: block;
		background-color: #fff;
		padding: 16px 20px;
		border-radius: ${theme.radius.borderRadius};
		box-shadow: ${theme.layout.shadow};
		margin-bottom: 10px;

		.description {
			font-size: 14px;
			font-style: italic;
		}
	`}
`;

export const DeleteButton = styled.button`
	${({ theme }) => css`
		width: 30px;
		height: 30px;
		color: ${theme.colors.gray.$7};
		border: 1px solid ${theme.colors.gray.$3};
		border-radius: 10px;
		cursor: pointer;
	`}
`;
