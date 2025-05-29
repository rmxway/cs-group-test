import styled, { css } from 'styled-components';

export const SelectWrapper = styled.div`
	${({ theme }) => css`
		position: relative;
		select {
			width: 100%;
			margin-bottom: 10px;
			height: 50px;
			padding: 15px 20px;
			outline: none;
			border-radius: ${theme.radius.borderRadius};
			appearance: none;
		}

		&:after {
			content: '↓';
			position: absolute;
			display: block;
			right: 20px;
			font-size: 14px;
			top: 45%;
			transform: translate(0, -50%);
			z-index: 2;
		}
	`}
`;
