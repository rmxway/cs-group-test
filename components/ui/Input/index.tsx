import { forwardRef, InputHTMLAttributes } from 'react';

import { Label } from '@/components/ui/Label';

import { InputWrapper } from './styled';

export interface InputProps {
	label?: string;
	name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps & InputHTMLAttributes<HTMLInputElement>>(
	({ name, label, className, ...props }, ref) => (
		<InputWrapper {...{ className }}>
			{label && <Label {...{ label, name }} />}
			<input {...props} {...{ ref, name }} id={name} />
		</InputWrapper>
	),
);

export default Input;
