import styled, { css } from 'styled-components';

const InputWrapper = styled.div`
	${({ theme }) => css`
		position: relative;
		padding-bottom: 16px;
		background-color: none;

		input[type='text'] {
			padding: 10px 20px;
            height: 40px;
			border-radius: ${theme.radius.borderRadius};
			width: 100%;
			transition: 0.2s all;

			border: 1px solid #ccc;
			background-color: #fff;

			&:active,
			&:focus {
				border-color: ${theme.colors.primary};
				outline: none;
			}

			&:disabled {
				background-color: ${theme.colors.gray.$3};
				opacity: 0.8;
			}
		}
	`}
`;

export { InputWrapper };
export default InputWrapper;
