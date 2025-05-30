import { forwardRef, HTMLAttributes } from 'react';
import Label from '@/components/ui/Label';
import { SelectWrapper } from './styled';

export type OptionValue = 'high' | 'middle' | 'low' | '-';
export interface Option {
	value: OptionValue;
	text: string;
}

interface SelectProps {
	label?: string;
	name: string;
	value?: OptionValue;
	options: Option[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps & HTMLAttributes<HTMLSelectElement>>(
	({ label, name, options, value, ...props }, ref) => {
		return (
			<div>
				{label && <Label {...{ label, name }} />}
				<SelectWrapper>
					<select {...props} ref={ref} value={value} id={name}>
						{options.map((opt) => (
							<option key={opt.text} value={opt.value}>
								{opt.text}
							</option>
						))}
					</select>
				</SelectWrapper>
			</div>
		);
	},
);

export default Select;
