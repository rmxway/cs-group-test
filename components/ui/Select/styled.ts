import styled, { css } from 'styled-components';

export const SelectWrapper = styled.div`
	${({ theme }) => css`
		position: relative;

        select {
			width: 100%;
			margin-bottom: 10px;
			height: 40px;
			padding: 10px 20px;
			outline: none;
			border-radius: ${theme.radius.borderRadius};
			appearance: none;
            cursor: pointer;
		}

		&:after {
			content: '↓';
			position: absolute;
			display: block;
			right: 20px;
			font-size: 14px;
			top: 40%;
			transform: translate(0, -50%);
			z-index: 2;
            pointer-events: none;
		}
	`}
`;
