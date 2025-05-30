import styled, { css } from 'styled-components';

export const SortWrapper = styled.div<{ $toggle: boolean }>`
	${({ $toggle }) => css`
		display: flex;
		align-items: center;
		cursor: pointer;
		opacity: 0.7;
		transition: 0.2s;

		&:hover {
			opacity: 1;
		}

		i {
			transition: all 0.3s ease-out;
			margin-left: 8px;
			transform: ${$toggle ? 'rotate(0)' : 'rotate(540deg)'};
		}
	`}
`;
