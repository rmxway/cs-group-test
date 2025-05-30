import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const TaskWrapper = styled(motion.div)`
	${({ theme }) => css`
		position: relative;
		display: block;
		background-color: #fff;
		padding: 16px 20px 40px;
		border-radius: ${theme.radius.borderRadius};
		box-shadow: ${theme.layout.shadow};
		margin-bottom: 10px;

		.description {
			font-size: 14px;
			font-style: italic;
		}

		${media.greaterThan('medium')`
            padding: 16px 20px;

            span {
                display: none;
            }
        `}
	`}
`;

export const Tools = styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: 10px;
	position: absolute;
	bottom: 20px;
	right: 20px;

	${media.greaterThan('medium')`
        position: relative;
        bottom: initial;
        right: initial;
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
