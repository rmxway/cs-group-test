import { darken, desaturate } from 'polished';
import { DefaultTheme } from 'styled-components';

import { Colors } from '@/@types/styled';

const primary = '#4f3727';
const success = '#18dc60';
const danger = '#f3394c';
const label = '#3d325d';

const colors: Colors = {
	primary,
	success,
	danger,
	label,
	dark: desaturate(0.9, darken(0.2, success)),
	gray: {
		$1: '#f3f3f3',
		$2: '#e3e3e3',
		$3: '#cdcdcd',
		$4: '#bebebe',
		$5: '#a5a5a5',
		$6: '#747474',
		$7: '#595959',
		$8: '#434343',
		$9: '#222222',
	},
};

export const createGradient = (deg: string, color1: string, long1: string, color2: string, long2: string) =>
	`linear-gradient(${deg}, ${color1} ${long1}, ${color2} ${long2})`;

export const defaultTheme: DefaultTheme = {
	name: 'default',
	colors,
	layout: {
		containerWidth: '1024px',
		shadow: '0 2px 8px rgba(0, 0, 0, 0.07)',
	},
	radius: {
		borderRadius: '12px',
	},
};

export default defaultTheme;
