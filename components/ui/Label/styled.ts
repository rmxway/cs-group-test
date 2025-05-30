import styled, { css } from 'styled-components';

export const LabelStyled = styled.label`
	${({ theme }) => css`
		display: block;
		margin-bottom: 8px;
		color: ${theme.colors.dark};
		font-size: 12px;
        font-weight: 600;
	`}
`;
